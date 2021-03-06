using MediatR;

namespace OnlineShoppingStore.Application.Services.Users.Commands.UserLogin
{
    public class RequestUserloginDto : IRequest<ResponseUserLoginDto>
    {
        public string UserName { get; set; }
        public string Password { get; set; }
    }
}
