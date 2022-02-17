using System.Threading.Tasks;

namespace OnlineShoppingStore.Application.Services.Users.Commands.DeleteUser
{
    public interface IDeleteUserService
    {
        Task<bool> ExecuteDeleteUser(long userId);
    }
}
