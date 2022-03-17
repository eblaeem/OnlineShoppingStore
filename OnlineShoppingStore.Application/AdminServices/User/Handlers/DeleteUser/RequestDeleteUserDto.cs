using MediatR;

namespace OnlineShoppingStore.Application.Services.Users.Commands.DeleteUser
{
    public class RequestDeleteUserDto: IRequest<bool>
    {
        public long UserId { get; set; }
    }
}
