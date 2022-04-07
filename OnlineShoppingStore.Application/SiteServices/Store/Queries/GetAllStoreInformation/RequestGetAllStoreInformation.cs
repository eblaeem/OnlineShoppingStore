using MediatR;

namespace OnlineShoppingStore.Application.SiteServices.Store.Queries.GetAllStoreInformation
{
    public class RequestGetAllStoreInformation : IRequest<ResponseGetAllStoreInformation>
    {
        public readonly static RequestGetAllStoreInformation Instance = new();
    }
}
