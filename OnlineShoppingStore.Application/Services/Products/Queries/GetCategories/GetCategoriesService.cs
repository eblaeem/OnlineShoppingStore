using Microsoft.EntityFrameworkCore;
using OnlineShoppingStore.Application.Interfaces.Context;
using OnlineShoppingStore.Common;
using OnlineShoppingStore.Common.ResultDto;
using System.Collections.Generic;
using System.Linq;

namespace OnlineShoppingStore.Application.Services.Products.Queries.GetCategories
{
    public class GetCategoriesService : IGetCategoriesService
    {
        private readonly IDataBaseContext _db;

        public GetCategoriesService(IDataBaseContext db)
        {
            _db = db;
        }

        public ResultDto<ICollection<CategoriesDto>> ExecuteIGetCategoriesService(long? parentId)
        {
            try
            {
                var categories = _db.Categories
                .Include(c => c.ParentCategory)
                .Include(c => c.SubCategories)
                .Where(c => c.ParentCategoryId == parentId && c.IsDeleted == false)
                .ToList()
                .Select(c => new CategoriesDto
                {
                    Id = c.Id,
                    Name = c.Name,
                    Parent = c.ParentCategory != null ? new
                    ParentCategoryDto
                    {
                        Id = c.ParentCategory.Id,
                        Name = c.ParentCategory.Name,
                    }
                    : null,
                    HasChild = c.SubCategories.Count() > 0 ? true : false,
                    CreateDate = c.InsertTime.ToshamsiDate()
                }).ToList();

                return new ResultDto<ICollection<CategoriesDto>>()
                {
                    IsSuccess = true,
                    Message = "لیست با موفقیت برگشت داده شد.",
                    Result = categories
                };
            }
            catch (System.Exception)
            {
                return new ResultDto<ICollection<CategoriesDto>>()
                {
                    IsSuccess = false,
                    Message = "نمایش لیست با خطا مواجه شد."
                };
            }
        }
    }
}
