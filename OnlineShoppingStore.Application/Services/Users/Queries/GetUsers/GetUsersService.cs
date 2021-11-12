using OnlineShoppingStore.Application.Interfaces.Context;
using OnlineShoppingStore.Common;
using System.Linq;

namespace OnlineShoppingStore.Application.Services.Users.Queries.GetUsers
{
    public class GetUsersService : IGetUsersService
    {
        private readonly IDataBaseContext _db;

        public GetUsersService(IDataBaseContext db)
        {
            _db = db;
        }
        public ResultGetUserDto ExecuteGetUsersDtos(RequstGetUserDto requst)
        {
            var users = _db.Users.AsQueryable();
            if (!string.IsNullOrWhiteSpace(requst.SearchKey))
            {
                users = users.Where(
                    p=>p.FullName.Contains(requst.SearchKey) && 
                    p.Email.Contains(requst.SearchKey));    
            }
            var userList = users.ToPaged(requst.Page, 20, out int rowsCount).Select(p => new GetUsersDto
            {
                FullName = p.FullName,
                Email = p.Email,
                Id = p.Id,
            }).ToList();
            return new ResultGetUserDto
            {
                Rows = rowsCount,
                Users = userList,
            };
        }
    }
}
