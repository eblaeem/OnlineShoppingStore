using MediatR;
using Microsoft.EntityFrameworkCore;
using OnlineShoppingStore.Application.Interfaces.Context;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Application.Services.Users.Queries.GetRoles
{
    public class GetRolesQuery : IRequestHandler<RequestGetRolesDto, ICollection<ResponseGetRolesDto>>
    {
        private readonly IDataBaseContext _db;

        public GetRolesQuery(IDataBaseContext db)
        {
            _db = db;
        }

        public async Task<ICollection<ResponseGetRolesDto>> Handle(RequestGetRolesDto request, CancellationToken cancellationToken)
        {
            var roles = await _db.Roles.Select(r => new ResponseGetRolesDto
            {
                Id = r.Id,
                Name = r.Name,
            }).ToListAsync(cancellationToken);
            return roles;
        }
    }
}
