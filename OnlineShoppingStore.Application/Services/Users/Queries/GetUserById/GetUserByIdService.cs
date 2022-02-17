using OnlineShoppingStore.Application.Interfaces.Context;
using OnlineShoppingStore.Common.ResultDto;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Application.Services.Users.Queries.GetUserById
{
    public class GetUserByIdService : IGetUserByIdService
    {
        private readonly IDataBaseContext _db;

        public GetUserByIdService(IDataBaseContext db)
        {
            _db = db;
        }
        public async System.Threading.Tasks.Task<ResultGetUserByIdDto> ExecuteGetUserById(long userId)
        {
            var user = await _db.Users.Include(e => e.UserRoles).FirstOrDefaultAsync(e => e.Id == userId);
            return new ResultGetUserByIdDto
            {
                FullName = user.FullName,
                Email = user.Email,
                Passwrod = user.Password,
                RePasswrod = user.Password,
                RoleId = user.UserRoles.FirstOrDefault().RoleId,
            };
        }
    }
}
