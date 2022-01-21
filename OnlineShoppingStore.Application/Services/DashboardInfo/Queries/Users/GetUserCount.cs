using OnlineShoppingStore.Application.Interfaces.Context;
using System.Linq;

namespace OnlineShoppingStore.Application.Services.DashboardInfo.Queries
{
    public class GetUserCount : IGetUserCount
    {
        private readonly IDataBaseContext _db;

        public GetUserCount(IDataBaseContext db)
        {
            _db = db;
        }
        public ResultGetUserCountDto ExecuteGetUserCount()
        {
            var count =  _db.Users.Where(u=>u.IsActive == true && u.IsDeleted != true).Count();
            return new ResultGetUserCountDto { UserCount = count };
        }
    }
}
