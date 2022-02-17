using Microsoft.EntityFrameworkCore;
using OnlineShoppingStore.Application.Interfaces.Context;
using OnlineShoppingStore.Common;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Application.Services.Products.Queries.GetCategories
{
    public class GetCategoriesService : IGetCategoriesService
    {
        private readonly IDataBaseContext _db;

        public GetCategoriesService(IDataBaseContext db)
        {
            _db = db;
        }

        public async Task<ICollection<CategoriesDto>> ExecuteGetCategories(long? parentId)
        {
            var categories =await _db.Categories
                .Include(c => c.ParentCategory)
                .Include(c => c.SubCategories)
                .Where(c => c.ParentCategoryId == parentId && c.IsDeleted == false)
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
                }).ToListAsync();

           return categories;
        }
    }
}
