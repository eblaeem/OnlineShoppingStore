using Microsoft.EntityFrameworkCore;
using OnlineShoppingStore.Application.Interfaces.Context;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Application.Services.Products.Queries.GetAllCategoriesService
{
    public class GetAllCategoriesService : IGetAllCategoriesService
    {
        private readonly IDataBaseContext _db;

        public GetAllCategoriesService(IDataBaseContext db)
        {
            _db = db;
        }

        public async Task<ICollection<ResultGetAllCategoriesDto>> Execute()
        {
            var cat = await _db.Categories.Include(c => c.ParentCategory)
                         .Where(c => c.ParentCategoryId != null)
                         .Select(c => new ResultGetAllCategoriesDto
                         {
                             Id = c.Id,
                             Name = $"{c.ParentCategory.Name} - {c.Name}",
                         }).ToListAsync();
            return cat;
        }
    }
}
