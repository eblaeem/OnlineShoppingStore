using MediatR;
using OnlineShoppingStore.Application.Interfaces.Context;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Application.Services.Products.Queries.GetCategoryByIdService
{
    public class GetCategoryByIdQuery : IRequestHandler<RequestGetCategoryByIdDto, ResponseGetCategoryByIdDto>
    {
        private readonly IDataBaseContext _db;

        public GetCategoryByIdQuery(IDataBaseContext db)
        {
            _db = db;
        }

        public async Task<ResponseGetCategoryByIdDto> Handle(RequestGetCategoryByIdDto request, CancellationToken cancellationToken)
        {
            var cat = await _db.Categories.FindAsync(request.Id);
            if (cat == null)
            {
                throw new Exception("عملیات با خطا مواجه شد.");
            }
            return new ResponseGetCategoryByIdDto
            {
                Id = cat.Id,
                Name = cat.Name,
            };
        }
    }
}
