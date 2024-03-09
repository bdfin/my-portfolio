using BeauFindlay.Api.Features.Contact;
using FluentValidation;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using SendGrid.Extensions.DependencyInjection;

namespace BeauFindlay.Api.Extensions;

public static class ServiceCollectionExtensions
{
    public static void AddApplicationServices(this IServiceCollection services)
    {
        var assembly = typeof(ServiceCollectionExtensions).Assembly;
        
        services.AddMediatR(config => { config.RegisterServicesFromAssembly(assembly); });

        services.AddValidatorsFromAssembly(assembly, includeInternalTypes: true);
        
        services.AddEmailService();
        
        services.AddRecaptchaService();
    }

    private static void AddEmailService(this IServiceCollection services)
    {
        var apiKey = Environment.GetEnvironmentVariable("SendGridApiKey")
                     ?? throw new ArgumentException("SendGrid API key cannot be null");
        
        services.AddSendGrid(config => config.ApiKey = apiKey);

        services.AddScoped<ISendGridService, SendGridService>();
    }

    private static void AddRecaptchaService(this IServiceCollection services)
    {
        var apiKey = Environment.GetEnvironmentVariable("RecaptchaApiKey")
                     ?? throw new ArgumentException("Google Recaptcha API key cannot be null");

        var settings = new RecaptchaSettings(apiKey);

        services.AddSingleton(settings);

        services.AddHttpClient<IRecaptchaService, RecaptchaService>();
    }
}