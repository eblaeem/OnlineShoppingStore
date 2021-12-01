using OnlineShoppingStore.Common.ResultDto;

namespace OnlineShoppingStore.Application.Services.Users.Commands.ChangeUserState
{
    public interface IChangeUserStateService
    {
        ResultDto ExecuteChangeUserStateService(long userId);
    }

}
