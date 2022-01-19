using OnlineShoppingStore.Common.ResultDto;

namespace OnlineShoppingStore.Application.Services.Users.Commands.DeleteUser
{
    public interface IDeleteUserService
    {
        ResultDto ExecuteDeleteUser(long userId);
    }
}
