using OnlineShoppingStore.Application.Interfaces.Context;
using OnlineShoppingStore.Common.ResultDto;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace OnlineShoppingStore.Application.Services.Users.Queries.GetUserById
{
    public class GetUserByIdService : IGetUserByIdService
    {
        private readonly IDataBaseContext _db;

        public GetUserByIdService(IDataBaseContext db)
        {
            _db = db;
        }
        public ResultDto<ResultGetUserByIdDto> ExecuteGetUserById(long userId)
        {
            try
            {
                var user = _db.Users.Include(e => e.UserRoles).FirstOrDefault(e => e.Id == userId);
                if (user == null)
                {
                    return new ResultDto<ResultGetUserByIdDto>
                    {
                        IsSuccess = false,
                        Message = "کاربری با چنین مشخصات یافت نشد."
                    };
                }

                return new ResultDto<ResultGetUserByIdDto>
                {
                    IsSuccess = true,
                    Message = "",
                    Result = new ResultGetUserByIdDto
                    {
                        FullName = user.FullName,
                        Email = user.Email,
                        Passwrod = user.Password,
                        RePasswrod = user.Password,
                        RoleId = user.UserRoles.FirstOrDefault().RoleId,
                    }
                };
            }
            catch (System.Exception)
            {
                return new ResultDto<ResultGetUserByIdDto>
                {
                    IsSuccess = false,
                    Message = "عملیات با خطا مواجه شد."
                };
            }
        }
    }
}
