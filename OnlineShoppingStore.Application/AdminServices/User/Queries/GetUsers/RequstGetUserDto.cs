using MediatR;

namespace OnlineShoppingStore.Application.Services.Users.Queries.GetUsers
{
    public class RequstGetUserDto : IRequest<ResultGetUserDto>
    {
        public string SearchKey { get; set; }
        public int Page { get; set; }
    }
}
