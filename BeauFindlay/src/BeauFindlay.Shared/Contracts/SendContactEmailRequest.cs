namespace BeauFindlay.Shared.Contracts;

public record SendContactEmailRequest(string Name, string FromEmail, string Message, string RecaptchaResponse);