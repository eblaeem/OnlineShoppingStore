using System.Threading.Tasks;

namespace OnlineShoppingStore.Application.Services.Users.Commands.UserLogin
{
    public interface IUserLoginService
    {
        Task<ResultUserLoginDto> ExecuteUserLogin(RequsetloginDto request);
    }
}
