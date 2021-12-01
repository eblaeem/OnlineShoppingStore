using OnlineShoppingStore.Application.Interfaces.Context;
using OnlineShoppingStore.Common.ResultDto;
using OnlineShoppingStore.Domain.Entities.User;
using System;
using System.Collections.Generic;
using System.Threading;

namespace OnlineShoppingStore.Application.Services.Users.Commands.EditUser
{
    public class EditUserService : IEditUserService
    {
        private readonly IDataBaseContext _db;

        public EditUserService(IDataBaseContext db)
        {
            _db = db;
        }

        public ResultDto ExecuteEditUser(RequestEditDto request, CancellationToken cancellationToken)
        {
            try
            {
                var user = _db.Users.Find(request.Id);
                if (user == null)
                {
                    return new ResultDto
                    {
                        IsSuccess = false,
                        Message = "کاربری با چنین مشخصات یافت نشد."
                    };
                }
                user.FullName = request.FullName;
                user.Email = request.Email;
                
                List<UserRole> userRoles = new List<UserRole>();

                foreach (var item in request.Roles)
                {
                    var roles = _db.Roles.Find(item.Id);
                    userRoles.Add(new UserRole
                    {
                        Role = roles,
                        RoleId = roles.Id,
                        User = user,
                        UserId = user.Id
                    });
                }
                user.UserRoles = userRoles;

                _db.SaveChanges();
                return new ResultDto
                {
                    IsSuccess = true,
                    Message = "کاربر با موفقیت ویرایش شد."
                };
            }
            catch (Exception)
            {
                return new ResultDto
                {
                    IsSuccess = false,
                    Message = "ویرایش کاربر با خطا مواجه شد."
                };
            }
        }
    }
}
