using MediatR;
using OnlineShoppingStore.Application.Interfaces.Context;
using OnlineShoppingStore.Common;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Application.SiteServices.Products.Queries.GetAllProductsInSite
{
    public class GetAllProductsInSiteQuery : IRequestHandler<RequestGetAllProductsInSite, ResponseGetAllProductsInSiteDto>
    {
        private readonly IDataBaseContext _db;

        public GetAllProductsInSiteQuery(IDataBaseContext db)
        {
            _db = db;
        }
        public async Task<ResponseGetAllProductsInSiteDto> Handle(RequestGetAllProductsInSite request, CancellationToken cancellationToken)
        {
            var product =_db.Products.Select(p => new
            {
                p.Id,
                p.Name,
                p.BasePrice,
                image = p.Images.FirstOrDefault()
            }).ToPaged(request.Page, 20, out int totalRow);
                

            return new ResponseGetAllProductsInSiteDto
            {
                TotalRow = totalRow,
                Products = product.Select(p => new ResponseGetAllProductsInSite
                {
                    Id = p.Id,
                    Name = p.Name,
                    Price = p.BasePrice,
                    ImgSrc = p.image != null ? p.image.Src : "images/NoImageAv.png"
                }).ToList()
            };
        }
    }
}
