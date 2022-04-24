using MediatR;
using Microsoft.EntityFrameworkCore;
using OnlineShoppingStore.Application.Interfaces.Context;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Application.AdminServices.HomePage.Queries.GetPicsForSliderAndBannersInAdmin
{
    public class GetPicsForSliderAndBannersInAdminQuery : IRequestHandler<RequestGetPicsForSliderAndBannersInAdmin, List<ResponseGetPicsForSliderAndBannersInAdmin>>
    {
        private readonly IDataBaseContext _db;

        public GetPicsForSliderAndBannersInAdminQuery(IDataBaseContext db)
        {
            _db = db;
        }
        public async Task<List<ResponseGetPicsForSliderAndBannersInAdmin>> Handle(RequestGetPicsForSliderAndBannersInAdmin request, CancellationToken cancellationToken)
        {
            var sliders = await _db.MainSliders
                .OrderByDescending(p => p.Id)
                .Where(p => p.IsDeleted == false)
                .Select(p => new ResponseGetPicsForSliderAndBannersInAdmin
                {
                    Id = p.Id,
                    Link = p.Link,
                    Src = p.Src,
                    Title = p.Title,
                    PreTitle = p.PreTitle,
                    Paragraph = p.Paragraph,
                    LocationEnum = p.DisplayIn,
                    IsVisibility = p.IsVisibility,
                    
                }).ToListAsync();

            return sliders;
        }
    }
}
