using System.Threading;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Application.Services.Users.Commands.EditUser
{
    public interface IEditUserService
    {
        Task<bool> ExecuteEditUser(RequestEditDto requestEditResultDto, CancellationToken cancellationToken);
    }
}
