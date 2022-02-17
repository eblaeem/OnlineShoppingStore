using OnlineShoppingStore.Application.Interfaces.Context;
using OnlineShoppingStore.Common.ResultDto;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Application.Services.Users.Commands.ChangeUserState
{
    public class ChangeUserStateSerive : IChangeUserStateService
    {
        private readonly IDataBaseContext _db;

        public ChangeUserStateSerive(IDataBaseContext db)
        {
            _db = db;
        }

        public async Task<UserStateEnum> Execute(long userId)
        {
            var user = await _db.Users.FindAsync(userId);
            if (user == null)
            {
                return UserStateEnum.NotFound;
            }
            if (user.IsActive)
            {
                user.IsActive = false;
                await _db.SaveChangesAsync();
                return UserStateEnum.Deactive;
            }
            else
                user.IsActive = true;
            await _db.SaveChangesAsync();
            return UserStateEnum.Active;
        }

        public async Task<bool> ExecuteChangeUserStateService(long userId)
        {
            var user = await _db.Users.FindAsync(userId);
            if (user == null)
            {
                return false;
            }
            user.IsActive = !user.IsActive;
            await _db.SaveChangesAsync();
            string userState = user.IsActive == true ? "فعال" : "غیرفعال";
            return true;


        }
    }

}
