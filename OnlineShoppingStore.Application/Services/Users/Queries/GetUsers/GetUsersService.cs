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
            try
            {
                var users = _db.Users.AsQueryable();
                if (!string.IsNullOrWhiteSpace(requst.SearchKey))
                {
                    users = users.Where(
                        p => p.FullName.Contains(requst.SearchKey) &&
                        p.Email.Contains(requst.SearchKey));
                }
                var userList = users.ToPaged(requst.Page, 20, out int rowsCount)
                                    .Where(p => !p.IsDeleted)
                                    .Select(p => new GetUsersDto
                                    {
                                        CreateDate = p.InsertTime.ToshamsiDate(),
                                        FullName = p.FullName,
                                        Email = p.Email,
                                        Id = p.Id,
                                        IsActive = p.IsActive,
                                    }).ToList();
                return new ResultGetUserDto
                {
                    Rows = rowsCount,
                    Users = userList,
                };
            }
            catch (System.Exception)
            {
                throw;
            }
        }
    }
}
