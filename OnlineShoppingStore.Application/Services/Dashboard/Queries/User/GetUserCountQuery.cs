using MediatR;
using Microsoft.EntityFrameworkCore;
using OnlineShoppingStore.Application.Interfaces.Context;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Application.Services.Dashboard.Queries.User
{
    public class GetUserCountQuery : IRequestHandler<RequestGetUserCount, int>
    {
        private readonly IDataBaseContext _db;

        public GetUserCountQuery(IDataBaseContext db)
        {
            _db = db;
        }

        public async Task<int> Handle(RequestGetUserCount request, CancellationToken cancellationToken)
        {
            var count =await _db.Users.Where(u => u.IsActive == true && u.IsDeleted != true).CountAsync();
            return count;
        }
    }
}
