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
        ResultDto<ResultDeleteUserDto> IDeleteUserService.ExecuteDeleteUser(long id)
        {
            var user = _db.Users.Find(id);
            if (user == null)
            {
                return new ResultDto<ResultDeleteUserDto>
                {
                    IsSuccess = false,
                    Message = "کاربری با چنین مشخصات یافت نشد."
                };
            }
            user.DeletedTime = DateTime.Now;
            user.IsDeleted = true;
            _db.SaveChanges();
            return new ResultDto<ResultDeleteUserDto>
            {
                Result = new ResultDeleteUserDto { UserId = id },
                Message = "کاربر با موفقیت حذف شد.",
                IsSuccess = true,
            };
        }
    }

}
