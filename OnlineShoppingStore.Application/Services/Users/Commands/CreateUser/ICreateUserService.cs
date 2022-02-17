using OnlineShoppingStore.Common.ResultDto;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Application.Services.Users.Commands.CreateUser
{
    public interface ICreateUserService
    {
        Task<ResultCreateUserDto> ExecuteCreateUser(RequestCreateUserDto requset);
    }
}