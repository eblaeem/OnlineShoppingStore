using OnlineShoppingStore.Common.ResultDto;
using System.Threading;

namespace OnlineShoppingStore.Application.Services.Users.Commands.CreateUser
{
    public interface ICreateUserService
    {
        ResultDto<ResultCreateUserDto> ExecuteCreateUser(RequsetCreateUserDto requset);
    }
}