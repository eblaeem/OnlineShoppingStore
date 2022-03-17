using MediatR;

namespace OnlineShoppingStore.Application.Services.Users.Queries.GetUserById
{
    public class RequestGetUserByIdDto : IRequest<ResultGetUserByIdDto>
    {
        public long UserId { get; set; }
    }
}
