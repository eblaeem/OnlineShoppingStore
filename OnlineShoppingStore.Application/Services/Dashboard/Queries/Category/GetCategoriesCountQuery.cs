using MediatR;
using Microsoft.EntityFrameworkCore;
using OnlineShoppingStore.Application.Interfaces.Context;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Application.Services.Dashboard.Queries.Categories
{
    public class GetCategoriesCountQuery : IRequestHandler<RequestCategoryCountDto, ResponseCategoryCountDto>
    {
        private readonly IDataBaseContext _db;

        public GetCategoriesCountQuery(IDataBaseContext db)
        {
            _db = db;
        }

        public async Task<ResponseCategoryCountDto> Handle(RequestCategoryCountDto request, CancellationToken cancellationToken)
        {
            var catCount =await _db.Categories.Where(c => c.IsDeleted == false && c.ParentCategoryId == null).CountAsync();
            return new ResponseCategoryCountDto
            {
                CatCount = catCount
            };
        }
    }
}
