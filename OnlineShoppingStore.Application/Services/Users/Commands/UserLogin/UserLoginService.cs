using Microsoft.EntityFrameworkCore;
using OnlineShoppingStore.Application.Interfaces.Context;
using OnlineShoppingStore.Common;
using OnlineShoppingStore.Common.ResultDto;
using System.Linq;

namespace OnlineShoppingStore.Application.Services.Users.Commands.UserLogin
{
    public class UserLoginService : IUserLoginService
    {
        private readonly IDataBaseContext _db;

        public UserLoginService(IDataBaseContext db)
        {
            _db = db;
        }

        public ResultDto<ResultUserLoginDto> ExecuteUserLogin(RequsetloginDto request)
        {
            if (string.IsNullOrWhiteSpace(request.UserName) || string.IsNullOrWhiteSpace(request.Password))
            {
                return new ResultDto<ResultUserLoginDto>
                {
                    Result = new ResultUserLoginDto
                    {

                    },
                    IsSuccess = false,
                    Message = "لطفاً نام کاربری و رمز عبور را وارد نمایید."
                };
            }

            var user = _db.Users.Include(u => u.UserRoles)
                .ThenInclude(u => u.Role)
                .Where(u => u.Email.Equals(request.UserName)
                && u.IsActive == true).FirstOrDefault();

            if (user == null)
            {
                return new ResultDto<ResultUserLoginDto>
                {
                    Result = new ResultUserLoginDto
                    {

                    },
                    IsSuccess = false,
                    Message = "کاربری با چنین مشخصات پیدا نشد."
                };
            }
            var passwordHasher = new PasswordHasher();
            bool resultVerifyPassword = passwordHasher.VerifyPassword(user.Password, request.Password);
            if (resultVerifyPassword != true)
            {
                return new ResultDto<ResultUserLoginDto>
                {
                    Result = new ResultUserLoginDto
                    {

                    },
                    IsSuccess = false,
                    Message = "رمز وارد شده اشتباه است."
                };
            }
            var roles = "";
            foreach (var item in user.UserRoles)
            {
                roles += $"{item.Role.Name}";
            }
            return new ResultDto<ResultUserLoginDto>
            {
                Result = new ResultUserLoginDto
                {
                    Roles = roles,
                    UserId = user.Id,
                    FullName = user.FullName
                },
                IsSuccess = true,
                Message = "ورود به سایت با موفقیت انجام شد."
            };
        }
    }
}
