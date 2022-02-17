using OnlineShoppingStore.Common.ResultDto;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Application.Services.Users.Queries.GetRoles
{
    public interface IGetRolesService
    {
        System.Threading.Tasks.Task<ICollection<GetRolesDto>> ExecuteGetRole();
    }
}
