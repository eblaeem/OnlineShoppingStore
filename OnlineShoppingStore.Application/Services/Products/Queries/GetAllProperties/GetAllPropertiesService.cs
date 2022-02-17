using Microsoft.EntityFrameworkCore;
using OnlineShoppingStore.Application.Interfaces.Context;
using OnlineShoppingStore.Common.ResultDto;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Application.Services.Products.Queries.GetAllPropertiesService
{
    public class GetAllPropertiesService : IGetAllPropertiesService
    {
        private readonly IDataBaseContext _db;

        public GetAllPropertiesService(IDataBaseContext db)
        {
            _db = db;
        }

        public async Task<ICollection<RequestGetAllPropertiesDto>> Execute()
        {
            var prop =await _db.Properties.Select(p => new RequestGetAllPropertiesDto
            {
                Id = p.Id,
                Title = p.Title,
            }).ToListAsync();
            return prop;
        }
    }
}
