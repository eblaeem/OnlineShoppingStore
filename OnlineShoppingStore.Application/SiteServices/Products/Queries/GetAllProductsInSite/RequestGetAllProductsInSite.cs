using MediatR;

namespace OnlineShoppingStore.Application.SiteServices.Products.Queries.GetAllProductsInSite
{
    public class RequestGetAllProductsInSite:IRequest<ResponseGetAllProductsInSiteDto>
    {
        public int Page { get; set; }
    }
}
