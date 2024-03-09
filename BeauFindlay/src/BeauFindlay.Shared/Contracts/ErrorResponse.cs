using System.Net;
using Newtonsoft.Json;

namespace BeauFindlay.Shared.Contracts;

public sealed class ErrorResponse
{
    [JsonProperty("code")]
    public int Code { get; set; }

    [JsonProperty("message")]
    public string Message { get; set; } = string.Empty;

    public static ErrorResponse Generic => new ErrorResponse
    {
        Code = (int)HttpStatusCode.BadRequest,
        Message = "Opps... something went wrong."
    };
}