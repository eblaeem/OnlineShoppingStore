using OnlineShoppingStore.Common.ResultDto;
using System.Threading;

namespace OnlineShoppingStore.Application.Services.Users.Commands.EditUser
{
    public interface IEditUserService
    {
        ResultDto ExecuteEditUser(RequestEditDto requestEditResultDto, CancellationToken cancellationToken);
    }
}
