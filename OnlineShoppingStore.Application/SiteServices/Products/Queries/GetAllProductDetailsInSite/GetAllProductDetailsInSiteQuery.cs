using MediatR;
using Microsoft.EntityFrameworkCore;
using OnlineShoppingStore.Application.Interfaces.Context;
using System;
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
                            pp.Value
                        };
            var product = await query.FirstOrDefaultAsync(cancellationToken: cancellationToken);

            return new ResponseGetAllProductDetailsInSite()
            {
                Id = product.Id,
                Name = product.Name,
                Inventory = product.Quantity,
                Displayed = product.Displayed,
                Price = product.BasePrice,
                Images = new List<ProductDetailImagesDto>()
                {
                   new ProductDetailImagesDto
                   {
                       Src = product.Src,
                   }
                }.ToList(),
                Features = new List<ProductDetailFeatureDto>()
                {
                    new ProductDetailFeatureDto()
                    {
                     Value = product.Value,
                     DisplayName = product.Property.Title
                    }
                }

            };
        }
    }
}
