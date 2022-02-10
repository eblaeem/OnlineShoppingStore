using OnlineShoppingStore.Common.ResultDto;

namespace OnlineShoppingStore.Application.Services.Users.Commands.CreateUser
{
    public interface ICreateUserService
    {
        ResultDto<ResultCreateUserDto> ExecuteCreateUser(RequsetCreateUserDto requset);
    }
}