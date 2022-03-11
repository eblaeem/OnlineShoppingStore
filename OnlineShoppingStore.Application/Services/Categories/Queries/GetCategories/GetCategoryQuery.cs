using MediatR;
using Microsoft.EntityFrameworkCore;
using OnlineShoppingStore.Application.Interfaces.Context;
using OnlineShoppingStore.Application.Services.Categories.Handlers.Queries.GetCategories;
using OnlineShoppingStore.Common;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Application.Services.Categories.Handlers.GetCategories
{
    public class GetCategoryQuery : IRequestHandler<RequestGetCategoryDto, ICollection<ResponseCategoryDto>>
    {
        private readonly IDataBaseContext _db;

        public GetCategoryQuery(IDataBaseContext db)
        {
            _db = db;
        }

        public async Task<ICollection<ResponseCategoryDto>> Handle(RequestGetCategoryDto request, CancellationToken cancellationToken)
        {
            var categories = await _db.Categories
                .Include(c => c.ParentCategory)
                .Include(c => c.SubCategories)
                .Where(c => c.ParentCategoryId == request.ParentId && c.IsDeleted == false)
                .Select(c => new ResponseCategoryDto
                {
                    Id = c.Id,
                    Name = c.Name,
                    Parent = c.ParentCategory != null ? new
                    ParentCategoryDto
                    {
                        Id = c.ParentCategory.Id,
                        Name = c.ParentCategory.Name,
                    }
                    : null,
                    HasChild = c.SubCategories.Count() > 0 ? true : false,
                    CreateDate = c.InsertTime.ToshamsiDate()
                }).ToListAsync();

            return categories;
        }
    }
}
