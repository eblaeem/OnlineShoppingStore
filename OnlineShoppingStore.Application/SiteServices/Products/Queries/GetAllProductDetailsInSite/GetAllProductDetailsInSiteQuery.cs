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
                            p.Star,
                            catName,
                            subCatName
                        };

            var product = await query.FirstAsync(cancellationToken: cancellationToken);

            return new ResponseGetAllProductDetailsInSite()
            {
                Id = product.Id,
                Name = product.Name,
                Inventory = product.Quantity,
                Displayed = product.Displayed,
                Star = product.Star,
                Price = product.BasePrice,
                Category = product.catName,
                SubCategory = product.subCatName,
                Features = await GetProductDetailFeatureAsync(request.Id),
                Images = await GetProductDetailImagesAsync(request.Id)
            };
        }

        private async Task<List<ProductDetailImagesDto>> GetProductDetailImagesAsync(long productId)
        {
            var images = await _db.Images
                .Where(p => p.ProductId == productId)
                .ToListAsync();

            var imageDto = new List<ProductDetailImagesDto>();

            foreach (var item in images)
            {
                var record = new ProductDetailImagesDto()
                {
                    Id = item.Id,
                    Src = item.Src
                };
                imageDto.Add(record);
            }

            return imageDto;
        }

        private async Task<List<ProductDetailFeatureDto>> GetProductDetailFeatureAsync(long productId)
        {
            var feature = await _db.ProductProperties
                .Include(p => p.Property)
                .Where(p => p.ProductId == productId)
                .ToListAsync();

            var featureDto = new List<ProductDetailFeatureDto>();


            foreach (var item in feature)
            {
                var record = new ProductDetailFeatureDto()
                {
                    Value = item.Value,
                    DisplayName = item.Property != null ? item.Property.Title : ""
                };

                featureDto.Add(record);
            }

            return featureDto;
        }
    }
}
