using OnlineShoppingStore.Application.Interfaces.Context;
using OnlineShoppingStore.Common.ResultDto;

namespace OnlineShoppingStore.Application.Services.Users.Commands.ChangeUserState
{
    public class ChangeUserStateSerive : IChangeUserStateService
    {
        private readonly IDataBaseContext _db;

        public ChangeUserStateSerive(IDataBaseContext db)
        {
            _db = db;
        }
        public ResultDto ExecuteChangeUserStateService(long userId)
        {

            var user = _db.Users.Find(userId);
            if (user == null)
            {
                return new ResultDto()
                {
                    IsSuccess = false,
                    Message = "کاربری با چنین مشخصات یافت نشد."
                };
            }
            user.IsActive = !user.IsActive;
            _db.SaveChanges();
            string userState = user.IsActive == true ? "فعال" : "غیرفعال";
            return new ResultDto()
            {
                IsSuccess = true,
                Message = $"کاربر با موفقیت {userState} شد."
            };   
        }
    }

}
