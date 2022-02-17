using Microsoft.EntityFrameworkCore;
using OnlineShoppingStore.Application.Interfaces.Context;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Application.Services.Users.Queries.GetRoles
{
    public class GetRolesService : IGetRolesService
    {
        private readonly IDataBaseContext _db;

        public GetRolesService(IDataBaseContext db)
        {
            _db = db;
        }
        public async Task<ICollection<GetRolesDto>> ExecuteGetRole()
        {
            var roles = await _db.Roles.Select(r => new GetRolesDto
            {
                Id = r.Id,
                Name = r.Name,
            }).ToListAsync();
            return roles;
        }
    }
}
