using OnlineShoppingStore.Common.ResultDto;

namespace OnlineShoppingStore.Application.Services.Products.Commands.DeleteCategoryService
{
    public interface IDeleteCategoryService
    {
        ResultDto ExecuteDeleteCategory(long id);
    }
}
