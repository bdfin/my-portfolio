using BeauFindlay.Shared.Abstractions;
using Microsoft.Extensions.Logging;
using SendGrid;
using SendGrid.Helpers.Mail;

namespace BeauFindlay.Api.Features.Contact;

internal sealed class SendGridService(ISendGridClient sendGridClient, ILogger<SendGridService> logger)
    : ISendGridService
{
    public async Task<Result> SendEmailAsync(string from, string to, string subject, string plainTextContent,
        string htmlContent)
    {
        ArgumentException.ThrowIfNullOrWhiteSpace(from, nameof(from));
        ArgumentException.ThrowIfNullOrWhiteSpace(to, nameof(to));
        ArgumentException.ThrowIfNullOrWhiteSpace(subject, nameof(subject));
        ArgumentException.ThrowIfNullOrWhiteSpace(plainTextContent, nameof(plainTextContent));
        ArgumentException.ThrowIfNullOrWhiteSpace(htmlContent, nameof(htmlContent));

        var fromEmail = new EmailAddress(from);
        var toEmail = new EmailAddress(to);

        var message = MailHelper.CreateSingleEmail(fromEmail, toEmail, subject, plainTextContent, htmlContent);

        var response = await sendGridClient.SendEmailAsync(message);

        if (response is not { IsSuccessStatusCode: true })
        {
            logger.LogError("Failed to send email. Status code: '{StatusCode}'", response?.StatusCode);
            
            return Result.Failure(new Error("Email.SendFailed", "Failed to send email."));
        }
        
        logger.LogInformation("Email sent successfully.");

        return Result.Success();
    }
}