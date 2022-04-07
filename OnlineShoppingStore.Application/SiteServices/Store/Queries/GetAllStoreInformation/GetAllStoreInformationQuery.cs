using MediatR;
using OnlineShoppingStore.Application.Interfaces.Context;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Application.SiteServices.Store.Queries.GetAllStoreInformation
{
    public class GetAllStoreInformationQuery : IRequestHandler<RequestGetAllStoreInformation, ResponseGetAllStoreInformation>
    {
        private readonly IDataBaseContext _db;

        public GetAllStoreInformationQuery(IDataBaseContext db)
        {
            _db = db;
        }
        public async Task<ResponseGetAllStoreInformation> Handle(RequestGetAllStoreInformation request, CancellationToken cancellationToken)
        {
            var query =_db.StoreDetails;

            var info = query.Select(p => new ResponseGetAllStoreInformation
            {
                City = p.City,
                Title = p.Title,
                Address = p.Address,
                Email = p.Email,
                MobileNumber = p.MobileNumber,
                PhoneNumber = p.PhoneNumber,
                PrePhoneNumber = p.PrePhoneNumber,
            }).FirstOrDefault();
            
            return info;
        }
    }
}
