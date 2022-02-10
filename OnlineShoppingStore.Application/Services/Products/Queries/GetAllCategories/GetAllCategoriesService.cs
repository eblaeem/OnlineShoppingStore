using Microsoft.EntityFrameworkCore;
using OnlineShoppingStore.Application.Interfaces.Context;
using OnlineShoppingStore.Common.ResultDto;
using System.Collections.Generic;
using System.Linq;

namespace OnlineShoppingStore.Application.Services.Products.Queries.GetAllCategoriesService
{
    public class GetAllCategoriesService : IGetAllCategoriesService
    {
        private readonly IDataBaseContext _db;

        public GetAllCategoriesService(IDataBaseContext db)
        {
            _db = db;
        }

        public ResultDto<ICollection<ResultGetAllCategoriesDto>> ExecuteGetAllCategories()
        {
            try
            {
                var cat = _db.Categories.Include(c => c.ParentCategory)
                        .Where(c => c.ParentCategoryId != null)
                        .ToList().Select(c => new ResultGetAllCategoriesDto
                        {
                            Id = c.Id,
                            Name = $"{c.ParentCategory.Name} - {c.Name}",
                        }).ToList();

                return new ResultDto<ICollection<ResultGetAllCategoriesDto>>
                {
                    IsSuccess = true,
                    Message = "لیست گروه محصولات با موفقیت برگشت داده شد.",
                    Result = cat
                };
            }
            catch (System.Exception)
            {
                return new ResultDto<ICollection<ResultGetAllCategoriesDto>>()
                {
                    IsSuccess = false,
                    Message = "لیست گروه محصولات با خطا مواجه شد."
                };
            }

        }
    }
}
