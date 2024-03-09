using BeauFindlay.Api.Abstractions.Messaging;
using BeauFindlay.Shared.Abstractions;
using FluentValidation;
using Microsoft.Extensions.Logging;

namespace BeauFindlay.Api.Features.Contact;

public sealed record SendContactEmailCommand(string Name, string FromEmail, string Message, string RecaptchaResponse)
    : ICommand;

internal sealed class SendContactEmailCommandValidator : AbstractValidator<SendContactEmailCommand>
{
    public SendContactEmailCommandValidator(IRecaptchaService recaptchaService)
    {
        RuleFor(c => c.Name)
            .NotEmpty()
            .MaximumLength(50);

        RuleFor(c => c.FromEmail)
            .NotEmpty()
            .EmailAddress();

        RuleFor(c => c.Message)
            .NotEmpty()
            .MaximumLength(500);

        RuleFor(c => c.RecaptchaResponse)
            .NotEmpty()
            .MustAsync(async (response, cancellation) =>
            {
                var validationResult = await recaptchaService.ValidateResponseAsync(response, cancellation);

                return validationResult.IsSuccess;
            });
    }
}

internal sealed class SendContactEmailCommandHandler(
    ISendGridService sendGridService,
    IValidator<SendContactEmailCommand> validator,
    ILogger<SendContactEmailCommandHandler> logger)
    : ICommandHandler<SendContactEmailCommand>
{
    private const string EmailSubjectBase = "New website enquiry";
    private const string MyEmail = "me@beaufindlay.com";

    public async Task<Result> Handle(SendContactEmailCommand request, CancellationToken cancellationToken)
    {
        var validationResult = await validator.ValidateAsync(request, cancellationToken);

        if (!validationResult.IsValid)
        {
            logger.LogError("Command validation failed. Errors: {ValidationErrors}", validationResult.ToString());

            return Result.Failure(new Error("ValidationFailed", "Command validation failed"));
        }
        
        var subject = $"{EmailSubjectBase} - {request.FromEmail}";
        var message = $"From: {request.FromEmail}. Message: {request.Message}";
        var htmlMessage = $"<p><b>From:</b> {request.FromEmail}</p> <p><b>Message:</b> <br /> {request.Message}</p>";

        var emailResult = await sendGridService.SendEmailAsync(
            MyEmail,
            MyEmail,
            subject,
            message,
            htmlMessage);

        return emailResult.IsFailure ? Result.Failure(emailResult.Error) : Result.Success();
    }
}