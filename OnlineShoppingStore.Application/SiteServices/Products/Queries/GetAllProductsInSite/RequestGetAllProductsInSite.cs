using MediatR;

namespace OnlineShoppingStore.Application.SiteServices.Products.Queries.GetAllProductsInSite
{
    public class RequestGetAllProductsInSite:IRequest<ResponseGetAllProductsInSiteDto>
    {
        public int Page { get; set; }
        public long? CatId { get; set; }
        public string SearchKey { get; set; }
    }
}
