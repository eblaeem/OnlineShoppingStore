using Microsoft.EntityFrameworkCore;
using OnlineShoppingStore.Application.Interfaces.Context;
using OnlineShoppingStore.Common;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Application.Services.Products.Queries.GetAllProductService
{
    public class GetAllProductService : IGetAllProductService
    {
        private readonly IDataBaseContext _db;

        public GetAllProductService(IDataBaseContext db)
        {
            _db = db;
        }
        public async Task<ICollection<GetAllProductDto>> Execute()
        {
            var product = await (from c in _db.Categories
                                 join ca in _db.Categories on c.Id equals ca.ParentCategoryId
                                 join p in _db.Products on c.Id equals p.Id
                                 select new GetAllProductDto
                                 {
                                     Id = p.Id,
                                     Name = p.Name,
                                     CatName = c.Name,
                                     SubCatName = ca.Name,
                                     Displayed = p.Displayed,
                                     BasePrice = p.BasePrice,
                                     CreatedDate = p.InsertTime.ToshamsiDate()
                                 }).ToListAsync();
            return product;
        }
    }
}
