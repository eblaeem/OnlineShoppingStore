using OnlineShoppingStore.Application.Interfaces.Context;
using OnlineShoppingStore.Common.ResultDto;
using OnlineShoppingStore.Domain.Entities.User;
using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;
using OnlineShoppingStore.Common;

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
            try
            {
                if (string.IsNullOrWhiteSpace(requset.FullName))
                {
                    return new ResultDto<ResultCreateUserDto>()
                    {
                        Result = new ResultCreateUserDto()
                        {
                            UserId = 0
                        },
                        IsSuccess = false,
                        Message = "لطفاً نام و نام خانوادگی را وارد نمایید."
                    };
                }

                if (string.IsNullOrWhiteSpace(requset.Email))
                {
                    return new ResultDto<ResultCreateUserDto>()
                    {
                        Result = new ResultCreateUserDto()
                        {
                            UserId = 0
                        },
                        IsSuccess = false,
                        Message = "لطفاً ایمیل را وارد نمایید."
                    };
                }
                
                if (string.IsNullOrWhiteSpace(requset.Password))
                {
                    return new ResultDto<ResultCreateUserDto>()
                    {
                        Result = new ResultCreateUserDto()
                        {
                            UserId = 0
                        },
                        IsSuccess = false,
                        Message = "لطفاً رمز عبور را وارد نمایید."
                    };
                }
                
                if (string.IsNullOrWhiteSpace(requset.RePassword))
                {
                    return new ResultDto<ResultCreateUserDto>()
                    {
                        Result = new ResultCreateUserDto()
                        {
                            UserId = 0
                        },
                        IsSuccess = false,
                        Message = "لطفاً تکرار رمز عبور را وارد نمایید."
                    };
                }
               
                if (requset.Password != requset.RePassword)
                {
                    return new ResultDto<ResultCreateUserDto>()
                    {
                        Result = new ResultCreateUserDto()
                        {
                            UserId = 0
                        },
                        IsSuccess = false,
                        Message = "رمز عبور و تکرار آن یکسان نمی باشد."
                    };
                }

                var emailRegex = @"^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$";
                var match = Regex.Match(requset.Email, emailRegex, RegexOptions.IgnoreCase);
                if (!match.Success)
                {
                    return new ResultDto<ResultCreateUserDto>()
                    {
                        Result = new ResultCreateUserDto()
                        {
                            UserId = 0
                        },
                        IsSuccess = false,
                        Message = "مقدار ایمیل را بصورت صحیح وارد نمایید."
                    };
                }

                var passwordHasher = new PasswordHasher();
                var hashedPashword = passwordHasher.HashPassword(requset.Password);

                User user = new()
                {
                    FullName = requset.FullName,
                    Email = requset.Email,
                    Password = hashedPashword,
                    IsActive = true
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
            catch (Exception)
            {
                return new ResultDto<ResultCreateUserDto>()
                {
                    Result = new ResultCreateUserDto()
                    {
                        UserId = 0,
                    },
                    Message = "ثبت نام کاربر با خطا مواجه شد.",
                    IsSuccess = false
                };
            }
        }
    }
}