using System.Collections.Generic;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Application.Services.Products.Queries.GetAllProductService
{
    public interface IGetAllProductService
    {
        Task<ICollection<GetAllProductDto>> Execute();
    }
}
