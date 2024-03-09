using BeauFindlay.Shared.Abstractions;

namespace BeauFindlay.Api.Features.Contact;

internal interface ISendGridService
{
    Task<Result> SendEmailAsync(string from, string to, string subject, string plainTextContent,
        string htmlContent);
}