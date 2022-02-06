using OnlineShoppingStore.Application.Interfaces.Context;
using OnlineShoppingStore.Common.ResultDto;
using System.Collections.Generic;
using System.Linq;

namespace OnlineShoppingStore.Application.Services.Products.Queries.GetAllPropertiesService
{
    public class GetAllPropertiesService : IGetAllPropertiesService
    {
        private readonly IDataBaseContext _db;

        public GetAllPropertiesService(IDataBaseContext db)
        {
            _db = db;
        }

        public ResultDto<ICollection<RequestGetAllPropertiesDto>> ExecuteGetAllProperties()
        {
            try
            {

                var prop = _db.Properties.ToList().Select(p => new RequestGetAllPropertiesDto
                {
                    Id = p.Id,
                    Title = p.Title,
                }).ToList();
                return new ResultDto<ICollection<RequestGetAllPropertiesDto>>
                {
                    IsSuccess = true,
                    Message = "لیست ویژگی ها با موفقیت نمایش داده شد.",
                    Result = prop
                };
            }
            catch (System.Exception)
            {
                return new ResultDto<ICollection<RequestGetAllPropertiesDto>>
                {
                    IsSuccess = false,
                    Message = "نمایش لیست ویژگی ها با خطا مواجه شد."
                };
            }
        }
    }
}
