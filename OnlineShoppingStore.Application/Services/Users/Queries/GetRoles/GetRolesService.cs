using OnlineShoppingStore.Application.Interfaces.Context;
using OnlineShoppingStore.Common.ResultDto;
using System.Collections.Generic;
using System.Linq;

namespace OnlineShoppingStore.Application.Services.Users.Queries.GetRoles
{
    public class GetRolesService : IGetRolesService
    {
        private readonly IDataBaseContext _db;

        public GetRolesService(IDataBaseContext db)
        {
            _db = db;
        }
        public ResultDto<ICollection<GetRolesDto>> ExecuteGetRole()
        {
            try
            {
                var roles = _db.Roles.ToList().Select(r => new GetRolesDto
                {
                    Id = r.Id,
                    Name = r.Name,
                }).ToList();

                return new ResultDto<ICollection<GetRolesDto>>()
                {
                    Result = roles,
                    IsSuccess = true,
                    Message = "عملیات با موفقیت انجام شد."
                };
            }
            catch (System.Exception)
            {
                return new ResultDto<ICollection<GetRolesDto>>()
                {
                    IsSuccess = false,
                    Message = "عملیات با خطا مواجه شد."
                };
            }
        }
    }
}
