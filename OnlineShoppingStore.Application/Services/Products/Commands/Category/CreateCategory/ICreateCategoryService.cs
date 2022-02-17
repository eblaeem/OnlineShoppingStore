using System.Threading.Tasks;

namespace OnlineShoppingStore.Application.Services.Products
{
    public interface ICreateCategoryService
    {
        Task<bool> ExecuteCreateCategory(long? ParentId, string Name);
    }
}
