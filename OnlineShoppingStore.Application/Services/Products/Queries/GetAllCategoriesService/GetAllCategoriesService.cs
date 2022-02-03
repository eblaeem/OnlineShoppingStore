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

        public ResultDto<ICollection<AllCategoriesDto>> ExecuteGetAllCategories()
        {
            var cat = _db.Categories.Include(c => c.ParentCategory)
                                    .Where(c => c.ParentCategoryId != null)
                                    .ToList().Select(c => new AllCategoriesDto
                                    {
                                        Id = c.Id,
                                        Name = $"{c.ParentCategory.Name} - {c.Name}",
                                    }).ToList();

            return new ResultDto<ICollection<AllCategoriesDto>>
            {
                IsSuccess = true,
                Message = "لیست گروه محصولات با موفقیت برگشت داده شد.",
                Result = cat
            };

        }
    }
}
