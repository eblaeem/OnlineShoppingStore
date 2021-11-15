using OnlineShoppingStore.Application.Interfaces.Context;
using OnlineShoppingStore.Common.ResultDto;
using OnlineShoppingStore.Domain.Entities.User;
using System.Collections.Generic;

namespace OnlineShoppingStore.Application.Services.Users.Commands.CreateUser
{
    public class CreateUserService : ICreateUserService
    {
        private readonly IDataBaseContext _db;

        public CreateUserService(IDataBaseContext db)
        {
            _db = db;
        }

        public ResultDto<ResultCreateUserDto> ExecuteCreateUser(RequsetCreateUserDto requset)
        {
            User user = new User()
            {
                FullName = requset.FullName,
                Email = requset.Email,
                //Password = requset.Password
            };
            List<UserRole> userRole = new List<UserRole>();

            foreach (var item in requset.Roles)
            {
                var roles = _db.Roles.Find(item.Id);
                userRole.Add(new UserRole
                {
                    Role = roles,
                    RoleId = roles.Id,
                    User = user,
                    UserId = user.Id
                });
            }

            user.UserRoles = userRole;

            _db.Users.Add(user);
            _db.SaveChanges();

            return new ResultDto<ResultCreateUserDto>()
            {
                IsSuccess = true,
                Message = "ثبت نام کاربر با موفقیت انجام شد.",
                Result = new ResultCreateUserDto()
                {
                    UserId = user.Id
                }
            };
        }
    }
}
