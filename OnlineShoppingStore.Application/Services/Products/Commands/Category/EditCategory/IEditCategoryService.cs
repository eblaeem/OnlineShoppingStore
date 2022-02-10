using OnlineShoppingStore.Common.ResultDto;

namespace OnlineShoppingStore.Application.Services.Products.Commands.EditCategoryService
{
    public interface IEditCategoryService
    {
        ResultDto ExecuteEditCategory(RequestEditCategoryDto requestEditCategoryDto);
    }
}
