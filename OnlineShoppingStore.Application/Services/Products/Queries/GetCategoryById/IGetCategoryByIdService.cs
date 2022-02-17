using System.Threading.Tasks;

namespace OnlineShoppingStore.Application.Services.Products.Queries.GetCategoryByIdService
{
    public interface IGetCategoryByIdService
    {
        Task<ResultGetCategoryByIdDto> ExecuteGetCategoryById(long id);
    }
}
