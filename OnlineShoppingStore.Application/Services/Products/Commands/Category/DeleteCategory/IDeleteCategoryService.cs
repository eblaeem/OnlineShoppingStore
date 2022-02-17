using System.Threading.Tasks;

namespace OnlineShoppingStore.Application.Services.Products.Commands.DeleteCategoryService
{
    public interface IDeleteCategoryService
    {
        Task<bool> ExecuteDeleteCategory(long id);
    }
}
