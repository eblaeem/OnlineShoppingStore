using OnlineShoppingStore.Common.ResultDto;
using static OnlineShoppingStore.Application.Services.Users.Commands.CreateUser.CreateUserService;

namespace OnlineShoppingStore.Application.Services.Users.Commands.CreateUser
{
    public interface ICreateUserService
    {
        ResultDto<ResultCreateUserDto> ExecuteCreateUser(RequsetCreateUserDto requset);
    }
}