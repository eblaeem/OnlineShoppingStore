using MediatR;

namespace OnlineShoppingStore.Application.Services.Dashboard.Queries.User
{
    public class RequestGetUserCount : IRequest<int>
    {
        public static readonly RequestGetUserCount Instance = new();
    }
}
