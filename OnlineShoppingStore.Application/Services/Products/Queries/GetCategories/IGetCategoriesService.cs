using System.Collections.Generic;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Application.Services.Products.Queries.GetCategories
{
    public interface IGetCategoriesService
    {
        Task<ICollection<CategoriesDto>> ExecuteGetCategories(long? parentId);
    }
}
