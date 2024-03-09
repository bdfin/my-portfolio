using BeauFindlay.Shared.Abstractions;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace BeauFindlay.Api.Features.Contact;

internal sealed class RecaptchaService(
    HttpClient httpClient,
    ILogger<RecaptchaService> logger,
    RecaptchaSettings settings)
    : IRecaptchaService
{
    public async Task<Result> ValidateResponseAsync(string recaptchaResponse,
        CancellationToken cancellationToken = default)
    {
        if (string.IsNullOrWhiteSpace(recaptchaResponse))
        {
            logger.LogWarning("Recaptcha response is null.");

            return Result.Failure(RecaptchaErrors.ResponseNull);
        }

        var response = await httpClient.PostAsync(
            $"https://www.google.com/recaptcha/api/siteverify?secret={settings.ApiKey}&response={recaptchaResponse}",
            null, cancellationToken);

        if (!response.IsSuccessStatusCode)
        {
            logger.LogError(
                "Google Recaptcha API validation request failed. Code: {StatusCode}",
                response.StatusCode);

            return Result.Failure(RecaptchaErrors.ApiRequestFailed);
        }

        var responseString = await response.Content.ReadAsStringAsync(cancellationToken);
        var recaptchaResult = JsonConvert.DeserializeObject<RecaptchaVerificationResult>(responseString);

        if (recaptchaResult is null)
        {
            logger.LogError("Unable to deserialize Recaptcha result.");

            return Result.Failure(RecaptchaErrors.ResponseSerializationFailed);
        }

        if (!recaptchaResult.Success)
        {
            logger.LogWarning(
                "Google Recaptcha validation failed. Errors: {Errors}",
                recaptchaResult.ErrorCodes);

            return Result.Failure(RecaptchaErrors.ValidationFailed);
        }

        logger.LogInformation("Recaptcha validation passed.");

        return Result.Success();
    }

    private class RecaptchaVerificationResult
    {
        [JsonProperty("success")]
        public bool Success { get; set; }

        [JsonProperty("challenge_ts")]
        public DateTime ChallengeTs { get; set; }

        [JsonProperty("hostname")]
        public string Hostname { get; set; } = string.Empty;

        [JsonProperty("error-codes")]
        public List<string> ErrorCodes { get; set; } = [];
    }
}

public static class RecaptchaErrors
{
    public static readonly Error ResponseNull = new(
        "Recaptcha.ResponseNull",
        "Recaptcha response is null.");

    public static readonly Error ValidationFailed = new(
        "Recaptcha.ValidationFailed",
        "Recaptcha validation failed.");

    public static readonly Error ResponseSerializationFailed = new(
        "Recaptcha.ResponseSerializationFailed",
        "Unable to deserialize Recaptcha result.");

    public static readonly Error ApiRequestFailed = new(
        "Recaptcha.ApiRequestFailed",
        "Recaptcha API validation request failed.");
}