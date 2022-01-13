using Microsoft.EntityFrameworkCore;
using OnlineShoppingStore.Application.Interfaces.Context;
using OnlineShoppingStore.Common.ResultDto;
using System.Collections.Generic;
using System.Linq;

namespace OnlineShoppingStore.Application.Services.Products.Queries.GetCategories
{
    public partial class GetCategoriesService : IGetCategoriesService
    {
        private readonly IDataBaseContext _db;

        public GetCategoriesService(IDataBaseContext db)
        {
            _db = db;
        }

        public ResultDto<ICollection<CategoriesDto>> ExecuteIGetCategoriesService(long? parentId)
        {
            var categories = _db.Categories
                .Include(c => c.ParentCategory)
                .Include(c => c.SubCategories)
                .Where(c => c.ParentCategoryId == parentId)
                .ToList()
                .Select(c => new CategoriesDto
                {
                    Id = c.Id,
                    Name = c.Name,
                    Parent = c.ParentCategory != null ? new
                    ParentCategoryDto
                    {
                        Id = c.Id,
                        name = c.Name,
                    }
                    :null,
                    HasChild = c.SubCategories.Count() > 0 ? true : false,
                }).ToList();


            return new ResultDto<ICollection<CategoriesDto>>()
            {
                IsSuccess = true,
                Message = "",
                Result = categories,
            };
        }
    }
}
