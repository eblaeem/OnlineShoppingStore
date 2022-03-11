using MediatR;
using Microsoft.EntityFrameworkCore;
using OnlineShoppingStore.Application.Interfaces.Context;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Application.Services.Dashboard.Queries.Category
{
    public class GetCategoriesCountQuery : IRequestHandler<RequestGetCategoriesCount, int>
    {
        private readonly IDataBaseContext _db;

        public GetCategoriesCountQuery(IDataBaseContext db)
        {
            _db = db;
        }

        public async Task<int> Handle(RequestGetCategoriesCount request, CancellationToken cancellationToken)
        {
            var catCount =await _db.Categories.Where(c => c.IsDeleted == false && c.ParentCategoryId == null).CountAsync();
            return catCount;
        }
    }
}
