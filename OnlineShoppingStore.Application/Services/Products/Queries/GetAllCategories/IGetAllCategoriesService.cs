using System.Collections.Generic;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Application.Services.Products.Queries.GetAllCategoriesService
{
    public interface IGetAllCategoriesService
    {
        Task<ICollection<ResultGetAllCategoriesDto>> Execute();
    }
}
