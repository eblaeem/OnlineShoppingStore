using System.Threading.Tasks;

namespace OnlineShoppingStore.Application.Services.Products.Commands.EditCategoryService
{
    public interface IEditCategoryService
    {
        Task<bool> ExecuteEditCategory(RequestEditCategoryDto requestEditCategoryDto);
    }
}
