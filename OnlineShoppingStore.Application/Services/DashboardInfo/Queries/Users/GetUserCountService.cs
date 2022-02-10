using OnlineShoppingStore.Application.Interfaces.Context;
using System.Linq;

namespace OnlineShoppingStore.Application.Services.DashboardInfo.Queries
{
    public class GetUserCountService : IGetUserCountService
    {
        private readonly IDataBaseContext _db;

        public GetUserCountService(IDataBaseContext db)
        {
            _db = db;
        }
        public ResultGetUserCountDto ExecuteGetUserCount()
        {
            var count =  _db.Users.Where(u=>u.IsActive == true && u.IsDeleted != true).Count();
            return new ResultGetUserCountDto
            {
                UserCount = count
            };
        }
    }
}
