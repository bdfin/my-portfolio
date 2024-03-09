using BeauFindlay.Shared.Abstractions;
using MediatR;

namespace BeauFindlay.Api.Abstractions.Messaging;

public interface IQuery<TResponse> : IRequest<Result<TResponse>>
{
}