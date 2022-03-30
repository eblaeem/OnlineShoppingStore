using MediatR;
using Microsoft.EntityFrameworkCore;
using OnlineShoppingStore.Application.Interfaces.Context;
using OnlineShoppingStore.Common;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Application.Services.Products.Queries.GetAllProductService
{
    public class GetAllProductsQuery : IRequestHandler<RequestGetAllProductsDto, ICollection<ResponseGetAllProductsDto>>
    {
        private readonly IDataBaseContext _db;

        public GetAllProductsQuery(IDataBaseContext db)
        {
            _db = db;
        }

        public async Task<ICollection<ResponseGetAllProductsDto>> Handle(RequestGetAllProductsDto request, CancellationToken cancellationToken)
        {
            var product = await (from p in _db.Products
                                 join pc in _db.ProductCategories on p.Id equals pc.ProductId
                                 join c in _db.Categories on pc.CategoryId equals c.Id 
                                 join ca in _db.Categories on c.ParentCategoryId equals ca.Id
                                 where p.IsDeleted == false
                                 select new ResponseGetAllProductsDto
                                 {
                                     Id = p.Id,
                                     Name = p.Name,
                                     BasePrice = p.BasePrice,
                                     Displayed = p.Displayed,
                                     CatName = ca.Name,
                                     SubCatName = c.Name,
                                     CreatedDate = p.InsertTime.ToshamsiDate()
                                 }).ToListAsync();
            return product;
        }
    }
}
