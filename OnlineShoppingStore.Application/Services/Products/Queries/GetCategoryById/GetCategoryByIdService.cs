using OnlineShoppingStore.Application.Interfaces.Context;
using OnlineShoppingStore.Common.ResultDto;

namespace OnlineShoppingStore.Application.Services.Products.Queries.GetCategoryByIdService
{
    public class GetCategoryByIdService : IGetCategoryByIdService
    {
        private readonly IDataBaseContext _db;

        public GetCategoryByIdService(IDataBaseContext db)
        {
            _db = db;
        }

        public ResultDto<ResultGetCategoryByIdDto> ExecuteGetCategoryById(long id)
        {
            var cat = _db.Categories.Find(id);
            if (cat == null)
            {
                return new ResultDto<ResultGetCategoryByIdDto>
                {
                    IsSuccess = false,
                    Message = "چنین گروه محصولی یافت نشد."
                };
            }
            return new ResultDto<ResultGetCategoryByIdDto>
            {
                IsSuccess = true,
                Message = "گروه محصول با موفقیت یافت شد.",
                Result = new ResultGetCategoryByIdDto
                {
                   Name = cat.Name,
                   Id = cat.Id
                }
            };
        }
    }
}
