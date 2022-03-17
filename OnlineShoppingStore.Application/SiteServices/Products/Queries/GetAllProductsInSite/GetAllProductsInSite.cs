using MediatR;
using Microsoft.EntityFrameworkCore;
using OnlineShoppingStore.Application.Interfaces.Context;
using OnlineShoppingStore.Common;
using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Application.SiteServices.Products.Queries.GetAllProductsInSite
{
    public class GetAllProductsInSite : IRequestHandler<RequestGetAllProductsInSite, ResponseGetAllProductsInSiteDto>
    {
        private readonly IDataBaseContext _db;

        public GetAllProductsInSite(IDataBaseContext db)
        {
            _db = db;
        }
        public async Task<ResponseGetAllProductsInSiteDto> Handle(RequestGetAllProductsInSite request, CancellationToken cancellationToken)
        {
            var product = _db.Products
                .Join(_db.Images,
                p => p.Id,
                i => i.ProductId,
                (p, i) => new
                {
                    p.Id,
                    p.Name,
                    p.BasePrice,
                    i.Src
                }).ToPaged(request.Page, 20, out int totalRow);

            return new ResponseGetAllProductsInSiteDto
            {
                TotalRow = totalRow,
                Products = product.Select(p => new ResponseGetAllProductsInSite
                {
                    Id = p.Id,
                    Name = p.Name,
                    Price = p.BasePrice,
                    ImgSrc = p.Src
                }).ToList()
            };
        }
    }   
}
