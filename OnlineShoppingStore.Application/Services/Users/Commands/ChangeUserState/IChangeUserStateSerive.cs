using OnlineShoppingStore.Common.ResultDto;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Application.Services.Users.Commands.ChangeUserState
{
    public interface IChangeUserStateService
    {
        System.Threading.Tasks.Task<bool> ExecuteChangeUserStateService(long userId);

        System.Threading.Tasks.Task<UserStateEnum> Execute(long userId);
    }
    public enum UserStateEnum
    {
        Active = 1,
        Deactive = 2,
        NotFound = 3
    }
}
