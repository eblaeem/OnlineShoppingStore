using OnlineShoppingStore.Application.Interfaces.Context;
using OnlineShoppingStore.Common.ResultDto;

namespace OnlineShoppingStore.Application.Services.Products.Queries.GetCategoryByIdService
{
    public class GetCategoryById : IGetCategoryByIdService
    {
        private readonly IDataBaseContext _db;

        public GetCategoryById(IDataBaseContext db)
        {
            _db = db;
        }

        public ResultDto<ResultCategoryDto> ExecuteGetCategoryById(long id)
        {
            var cat = _db.Categories.Find(id);
            if (cat == null)
            {
                return new ResultDto<ResultCategoryDto>
                {
                    IsSuccess = false,
                    Message = "چنین گروه محصولی یافت نشد."
                };
            }
            return new ResultDto<ResultCategoryDto>
            {
                IsSuccess = true,
                Message = "گروه محصول با موفقیت یافت شد.",
                Result = new ResultCategoryDto
                {
                   Name = cat.Name,
                }
            };
        }
    }
}
