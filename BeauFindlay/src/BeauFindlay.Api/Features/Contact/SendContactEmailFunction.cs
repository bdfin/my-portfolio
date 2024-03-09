using System.Collections.Generic;
using System.Net;
using System.Security.Cryptography;
using BeauFindlay.Shared.Contracts;
using MediatR;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace BeauFindlay.Api.Features.Contact;

public class SendContactEmailFunction(ILoggerFactory loggerFactory, ISender sender)
{
    private readonly ILogger logger = loggerFactory.CreateLogger<SendContactEmailFunction>();

    [Function(nameof(SendContactEmailFunction))]
    public async Task<HttpResponseData> Run(
        [HttpTrigger(AuthorizationLevel.Function, "post", Route = "send-contact-email")] HttpRequestData req,
        FunctionContext executionContext, CancellationToken cancellationToken)
    {
        logger.LogInformation($"{nameof(SendContactEmailFunction)} function received a request.");

        var requestBody = await new StreamReader(req.Body).ReadToEndAsync(cancellationToken);
        var request = JsonConvert.DeserializeObject<SendContactEmailRequest>(requestBody);

        HttpResponseData response;

        try
        {
            if (request == null)
            {
                throw new ApplicationException("Unable to deserialize response.");
            }

            var emailCommand = new SendContactEmailCommand(
                request.Name,
                request.FromEmail,
                request.Message,
                request.RecaptchaResponse);

            var sendEmailResult = await sender.Send(emailCommand, cancellationToken);

            if (sendEmailResult.IsFailure)
            {
                logger.LogError("Send email command failed. Error: {Error}", sendEmailResult.Error.Message);

                response = req.CreateResponse(HttpStatusCode.BadRequest);

                var error = new ErrorResponse
                {
                    Code = (int)HttpStatusCode.BadRequest,
                    Message = sendEmailResult.Error.Message
                };

                await response.WriteAsJsonAsync(error, cancellationToken);
            }
            else
            {
                response = req.CreateResponse(HttpStatusCode.OK);

                await response.WriteAsJsonAsync("", cancellationToken: cancellationToken);
            }
        }
        catch (Exception e)
        {
            logger.LogError(e, "Exception occured. Error: '{Message}'", e.Message);

            response = req.CreateResponse(HttpStatusCode.InternalServerError);
            
            await response.WriteAsJsonAsync(ErrorResponse.Generic, cancellationToken);
        }

        return response;
    }
}