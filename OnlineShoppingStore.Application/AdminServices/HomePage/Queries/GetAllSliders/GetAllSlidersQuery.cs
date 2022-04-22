using MediatR;
using Microsoft.EntityFrameworkCore;
using OnlineShoppingStore.Application.Interfaces.Context;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Application.AdminServices.HomePage.Queries.GetAllSliders
{
    public class GetAllSlidersQuery : IRequestHandler<RequestGetAllSliders, List<ResponseGetAllSliders>>
    {
        private readonly IDataBaseContext _db;

        public GetAllSlidersQuery(IDataBaseContext db)
        {
            _db = db;
        }
        public async Task<List<ResponseGetAllSliders>> Handle(RequestGetAllSliders request, CancellationToken cancellationToken)
        {
            var sliders = await _db.MainSliders
                .OrderByDescending(p => p.Id)
                .Where(p=>p.IsDeleted == false)
                .Select(p => new ResponseGetAllSliders
            {
                Link = p.Link,
                Src = p.Src,
                Title = p.Title,
                PreTitle = p.PreTitle,
                Paragraph = p.Paragraph,
                Id = p.Id,
                Location = Location.Top
                
            }).ToListAsync();

            return sliders;
        }
    }
}
