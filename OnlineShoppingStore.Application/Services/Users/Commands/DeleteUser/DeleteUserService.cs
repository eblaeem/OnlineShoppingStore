using OnlineShoppingStore.Application.Interfaces.Context;
using System;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Application.Services.Users.Commands.DeleteUser
{
    public class DeleteUserService : IDeleteUserService
    {
        private readonly IDataBaseContext _db;

        public DeleteUserService(IDataBaseContext db)
        {
            _db = db;
        }
        public async Task<bool> ExecuteDeleteUser(long userId)
        {
            var user =await _db.Users.FindAsync(userId);
            if (user == null)
            {
               return false;
            }
            user.DeletedTime = DateTime.Now;
            user.IsDeleted = true;
            _db.SaveChanges();
            return true;
        }
    }

}
