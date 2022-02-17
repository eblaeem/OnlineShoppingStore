using OnlineShoppingStore.Application.Interfaces.Context;
using System;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Application.Services.Products.Queries.GetCategoryByIdService
{
    public class GetCategoryByIdService : IGetCategoryByIdService
    {
        private readonly IDataBaseContext _db;

        public GetCategoryByIdService(IDataBaseContext db)
        {
            _db = db;
        }

        public async Task<ResultGetCategoryByIdDto> ExecuteGetCategoryById(long id)
        {
            var cat =await _db.Categories.FindAsync(id);
            if (cat == null)
            {
                throw new Exception("عملیات با خطا مواجه شد.");
            }
            return new ResultGetCategoryByIdDto
            {
                Id = cat.Id,
                Name = cat.Name,
            };
        }
    }
}
