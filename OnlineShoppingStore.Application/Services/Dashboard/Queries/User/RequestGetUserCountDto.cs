using MediatR;

namespace OnlineShoppingStore.Application.Services.Dashboard.Queries
{
    public class RequestGetUserCountDto : IRequest<int>
    {
        public static readonly RequestGetUserCountDto Instance = new();
    }
}
