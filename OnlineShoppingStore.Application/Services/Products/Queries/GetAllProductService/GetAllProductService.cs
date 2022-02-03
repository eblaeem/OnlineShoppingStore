using OnlineShoppingStore.Application.Interfaces.Context;
using OnlineShoppingStore.Common;
using OnlineShoppingStore.Common.ResultDto;
using System.Collections.Generic;
using System.Linq;

namespace OnlineShoppingStore.Application.Services.Products.Queries.GetAllProductService
{
    public class GetAllProductService : IGetAllProductService
    {
        private readonly IDataBaseContext _db;

        public GetAllProductService(IDataBaseContext db)
        {
            _db = db;
        }
        public ResultDto<ICollection<GetAllProductDto>> ExecuteGetAllProductService()
        {
            try
            {
                var product = (from c in _db.Categories
                               join ca in _db.Categories on c.Id equals ca.ParentCategoryId
                               join p in _db.Products on c.Id equals p.Id
                               select new GetAllProductDto
                               {
                                   Id = p.Id,
                                   Name = p.Name,
                                   CatName = c.Name,
                                   SubCatName = ca.Name,
                                   Displayed = p.Displayed,
                                   CreatedDate = p.InsertTime.ToshamsiDate()
                               }).ToList();

                return new ResultDto<ICollection<GetAllProductDto>>()
                {
                    Result = product,
                    IsSuccess = true,
                    Message = "لیست محصولات با موفقیت برگشت داده شد."
                };
            }
            catch (System.Exception)
            {
                return new ResultDto<ICollection<GetAllProductDto>>()
                {
                    IsSuccess = false,
                    Message = "نمایش لیست محصولات با خطا مواجه شد."
                };
            }
        }
    }
}
