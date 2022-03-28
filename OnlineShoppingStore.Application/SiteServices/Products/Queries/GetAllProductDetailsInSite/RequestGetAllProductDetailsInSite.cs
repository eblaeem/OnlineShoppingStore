using MediatR;

namespace OnlineShoppingStore.Application.SiteServices.Products.Queries.GetAllProductDetailsInSite
{
    public class RequestGetAllProductDetailsInSite:IRequest<ResponseGetAllProductDetailsInSite>
    {
        public long Id { get; set; }
    }


}
