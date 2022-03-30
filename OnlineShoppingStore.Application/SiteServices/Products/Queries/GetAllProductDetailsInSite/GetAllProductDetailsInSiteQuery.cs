using MediatR;
using Microsoft.EntityFrameworkCore;
using OnlineShoppingStore.Application.Interfaces.Context;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Application.SiteServices.Products.Queries.GetAllProductDetailsInSite
{
    public class GetAllProductDetailsInSiteQuery : IRequestHandler<RequestGetAllProductDetailsInSite, ResponseGetAllProductDetailsInSite>
    {
        private readonly IDataBaseContext _db;

        public GetAllProductDetailsInSiteQuery(IDataBaseContext db)
        {
            _db = db;
        }

        public async Task<ResponseGetAllProductDetailsInSite> Handle(RequestGetAllProductDetailsInSite request, CancellationToken cancellationToken)
        {
            var query = from p in _db.Products
                        join i in _db.Images on p.Id equals i.ProductId
                        join pp in _db.ProductProperties on p.Id equals pp.ProductId
                        join pc in _db.ProductCategories on p.Id equals pc.ProductId
                        join c in _db.Categories on pc.CategoryId equals c.Id
                        join ca in _db.Categories on c.ParentCategoryId equals ca.Id
                        let subCatName = c.Name
                        let catName = ca.Name
                        where p.Id == request.Id
                        select new
                        {
                            p.Id,
                            p.Name,
                            p.Quantity,
                            p.Displayed,
                            p.BasePrice,
                            i.Src,
                            i.ProductId,
                            pp.Property,
                            pp.Value,
                            catName,
                            subCatName
                        };

            var product = await query.FirstOrDefaultAsync(cancellationToken: cancellationToken);

            var features = new List<ProductDetailFeatureDto>();
            var images = new List<ProductDetailImagesDto>();

            foreach (var item in query)
            {
                var record = new ProductDetailFeatureDto()
                {
                    Value = item.Value,
                    DisplayName = item.Property.Title
                };
                
                features.Add(record);
            }

            foreach (var item in query)
            {
                var record = new ProductDetailImagesDto()
                {
                    Src = item.Src
                };
            }

            return new ResponseGetAllProductDetailsInSite()
            {
                Id = product.Id,
                Name = product.Name,
                Inventory = product.Quantity,
                Displayed = product.Displayed,
                Price = product.BasePrice,
                Category = product.catName,
                SubCategory = product.subCatName,
                Features = features,
                Images = images
            };
        }
    }
}
