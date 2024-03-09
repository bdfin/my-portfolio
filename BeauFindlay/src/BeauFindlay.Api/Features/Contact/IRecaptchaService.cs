using BeauFindlay.Shared.Abstractions;

namespace BeauFindlay.Api.Features.Contact;

internal interface IRecaptchaService
{
    Task<Result> ValidateResponseAsync(string recaptchaResponse,
        CancellationToken cancellationToken = default);
}