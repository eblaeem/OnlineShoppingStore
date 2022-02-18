using MediatR;
using Microsoft.EntityFrameworkCore;
using OnlineShoppingStore.Application.Interfaces.Context;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Application.Services.Products.Queries.GetAllCategoriesService
{
    public class GetAllCategoriesQuery: IRequestHandler<RequestGetAllCategoriesDto, ICollection<ResponseGetAllCategoriesDto>>
    {
        private readonly IDataBaseContext _db;

        public GetAllCategoriesQuery(IDataBaseContext db)
        {
            _db = db;
        }

        public async Task<ICollection<ResponseGetAllCategoriesDto>> Handle(RequestGetAllCategoriesDto request, CancellationToken cancellationToken)
        {
            var cat = await _db.Categories.Include(c => c.ParentCategory)
                        .Where(c => c.ParentCategoryId != null)
                        .Select(c => new ResponseGetAllCategoriesDto
                        {
                            Id = c.Id,
                            Name = $"{c.ParentCategory.Name} - {c.Name}",
                        }).ToListAsync();
            return cat;
        }
    }
}
