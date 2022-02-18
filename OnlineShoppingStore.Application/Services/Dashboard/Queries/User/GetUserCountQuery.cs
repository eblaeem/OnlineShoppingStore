using MediatR;
using OnlineShoppingStore.Application.Interfaces.Context;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Application.Services.DashboardInfo.Queries
{
    public class GetUserCountQuery : IRequestHandler<RequestGetUserCountDto, ResponseGetUserCountDto>
    {
        private readonly IDataBaseContext _db;

        public GetUserCountQuery(IDataBaseContext db)
        {
            _db = db;
        }

        public async Task<ResponseGetUserCountDto> Handle(RequestGetUserCountDto request, CancellationToken cancellationToken)
        {
            var count = _db.Users.Where(u => u.IsActive == true && u.IsDeleted != true).Count();
            return new ResponseGetUserCountDto
            {
                UserCount = count
            };
        }
    }
}
