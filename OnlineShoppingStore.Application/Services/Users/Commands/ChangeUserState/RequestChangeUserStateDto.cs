using MediatR;

namespace OnlineShoppingStore.Application.Services.Users.Commands.ChangeUserState
{
    public class RequestChangeUserStateDto : IRequest<UserStateEnum>
    {
        public long UserId { get; set; }
    }
}
