using OnlineShoppingStore.Common.ResultDto;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Application.Services.Users.Queries.GetRoles
{
    public interface IGetRolesService
    {
        Task<ICollection<GetRolesDto>> ExecuteGetRole();
    }
}
