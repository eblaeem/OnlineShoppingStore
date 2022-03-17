using MediatR;
using Microsoft.EntityFrameworkCore;
using OnlineShoppingStore.Application.Interfaces.Context;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Application.Services.Products.Queries.GetAllPropertiesService
{
    public class GetAllPropertiesQuery : IRequestHandler<RequestGetAllPropertiesDto, ICollection<ResponseGetAllPropertiesDto>>
    {
        private readonly IDataBaseContext _db;

        public GetAllPropertiesQuery(IDataBaseContext db)
        {
            _db = db;
        }

        public async Task<ICollection<ResponseGetAllPropertiesDto>> Handle(RequestGetAllPropertiesDto request, CancellationToken cancellationToken)
        {
            var prop = await _db.Properties.Select(p => new ResponseGetAllPropertiesDto
            {
                Id = p.Id,
                Title = p.Title,
            }).ToListAsync();
            return prop;
        }
    }
}
