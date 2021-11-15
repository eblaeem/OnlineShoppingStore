using OnlineShoppingStore.Common.ResultDto;
using System.Collections.Generic;

namespace OnlineShoppingStore.Application.Services.Users.Queries.GetRoles
{
    public interface IGetRolesService
    {
        ResultDto<ICollection<GetRolesDto>> ExecuteGetRole();
    }
}
