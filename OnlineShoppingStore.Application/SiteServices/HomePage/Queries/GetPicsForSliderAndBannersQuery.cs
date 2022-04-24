using MediatR;
using Microsoft.EntityFrameworkCore;
using OnlineShoppingStore.Application.AdminServices.HomePage.Queries.GetPicsForSliderAndBannersInAdmin;
using OnlineShoppingStore.Application.Interfaces.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Application.SiteServices.HomePage.Queries
{
    public class GetPicsForSliderAndBannersQuery : IRequestHandler<RequestGetPicsForSliderAndBanners, List<ResponseGetPicsForSliderAndBannersInAdmin>>
    {
        private readonly IDataBaseContext _db;

        public GetPicsForSliderAndBannersQuery(IDataBaseContext db)
        {
            _db = db;
        }
        public async Task<List<ResponseGetPicsForSliderAndBannersInAdmin>> Handle(RequestGetPicsForSliderAndBanners request, CancellationToken cancellationToken)
        {
            var Images = await _db.MainSliders
                 .OrderByDescending(p => p.Id)
                 .Where(p => p.IsDeleted == false && p.IsVisibility == true)
                 .Take(request.Take)
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

            return Images;
        }
    }

}
