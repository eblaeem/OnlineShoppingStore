using OnlineShoppingStore.Application.Interfaces.Context;
using OnlineShoppingStore.Common.ResultDto;
using System;


namespace OnlineShoppingStore.Application.Services.Users.Commands.DeleteUser
{
    public class DeleteUserService : IDeleteUserService
    {
        private readonly IDataBaseContext _db;

        public DeleteUserService(IDataBaseContext db)
        {
            _db = db;
        }
        ResultDto IDeleteUserService.ExecuteDeleteUser(long userId)
        {
            var user = _db.Users.Find(userId);
            if (user == null)
            {
                return new ResultDto
                {
                    IsSuccess = false,
                    Message = "کاربری با چنین مشخصات یافت نشد."
                };
            }
            user.DeletedTime = DateTime.Now;
            user.IsDeleted = true;
            _db.SaveChanges();
            return new ResultDto
            {
                Message = "کاربر با موفقیت حذف شد.",
                IsSuccess = true
            };
        }
    }

}
