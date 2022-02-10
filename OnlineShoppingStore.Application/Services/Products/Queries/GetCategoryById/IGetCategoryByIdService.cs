using OnlineShoppingStore.Common.ResultDto;

namespace OnlineShoppingStore.Application.Services.Products.Queries.GetCategoryByIdService
{
    public interface IGetCategoryByIdService
    {
        ResultDto<ResultGetCategoryByIdDto> ExecuteGetCategoryById(long id);
    }
}
