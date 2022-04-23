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
            var productQuery = from p in _db.Products
                               join pc in _db.ProductCategories
                               on p.Id equals pc.ProductId
                               select new
                               {
                                   p.Id,
                                   p.Name,
                                   p.BasePrice,
                                   p.ViewCount,
                                   p.Star,
                                   image = p.Images.FirstOrDefault(),
                                   pc.CategoryId
                               };

            if (request.CatId != null)
            {
                productQuery = productQuery.Where(p => p.CategoryId == request.CatId).AsQueryable();
            }

            if (!string.IsNullOrEmpty(request.SearchKey))
            {
                productQuery = productQuery.Where(p => p.Name.Contains(request.SearchKey));
            }

            switch (request.Ordering)
            {
                case OrderingEnum.NoOrder:
                    productQuery = productQuery.OrderByDescending(p => p.Id).AsQueryable();
                    break;
                case OrderingEnum.MostVisited:
                    productQuery = productQuery.OrderByDescending(p => p.ViewCount).AsQueryable();
                    break;
                //case OrderingEnum.BestSelling:
                //    productQuery = productQuery.OrderByDescending(p => p.BasePrice).AsQueryable();
                //    break;
                //case OrderingEnum.MostLikes: 
                //    break;
                case OrderingEnum.TheNewest:
                    productQuery = productQuery.OrderByDescending(p => p.Id).AsQueryable();
                    break;
                case OrderingEnum.LowestPrice:
                    productQuery = productQuery.OrderBy(p => p.BasePrice).AsQueryable();
                    break;
                case OrderingEnum.HighestPrice:
                    productQuery = productQuery.OrderByDescending(p => p.BasePrice).AsQueryable();
                    break;
                default:
                    break;
            }

            var product = productQuery.ToPaged(request.Page,20, out int totalRow);

            return new ResponseGetAllProductsInSiteDto
            {
                TotalRow = totalRow,
                Products = product.Select(p => new ResponseGetAllProductsInSite
                {
                    Id = p.Id,
                    Name = p.Name,
                    Price = p.BasePrice,
                    Star = p.Star,
                    ImgSrc = p.image != null ? p.image.Src : "images/NoImageAv.png"
                }).ToList()
            };
        }
    }
}
