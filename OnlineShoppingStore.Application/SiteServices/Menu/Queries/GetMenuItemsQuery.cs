using MediatR;
using Microsoft.EntityFrameworkCore;
using OnlineShoppingStore.Application.Interfaces.Context;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Application.SiteServices.Menu.Queries
{
    public class GetMenuItemsQuery : IRequestHandler<RequestGetMenuItems, List<ResponseGetMenuItems>>
    {
        private readonly IDataBaseContext _db;

        public GetMenuItemsQuery(IDataBaseContext db)
        {
            _db = db;
        }
        public async Task<List<ResponseGetMenuItems>> Handle(RequestGetMenuItems request, CancellationToken cancellationToken)
        {
            var category =await _db.Categories
                .Include(p => p.SubCategories)
                .Select(p => new ResponseGetMenuItems
                {
                    CatId = p.Id,
                    Name = p.Name,
                    Child = p.SubCategories.Select(c => new ResponseGetMenuItems
                    {
                        CatId = c.Id,
                        Name = c.Name
                    }).AsEnumerable()
                }).ToListAsync();

            return category;
        }
    }
}
