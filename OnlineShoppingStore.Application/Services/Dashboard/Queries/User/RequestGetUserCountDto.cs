using MediatR;

namespace OnlineShoppingStore.Application.Services.Dashboard.Queries
{
    public class RequestGetUserCountDto : IRequest<ResponseGetUserCountDto>
    {
        public static readonly RequestGetUserCountDto Instance = new();
    }
}
