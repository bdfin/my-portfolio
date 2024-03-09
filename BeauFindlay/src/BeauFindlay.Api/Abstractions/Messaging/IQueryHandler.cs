using BeauFindlay.Shared.Abstractions;
using MediatR;

namespace BeauFindlay.Api.Abstractions.Messaging;

public interface IQueryHandler<TQuery, TResponse> : IRequestHandler<TQuery, Result<TResponse>>
    where TQuery : IQuery<TResponse>
{
}