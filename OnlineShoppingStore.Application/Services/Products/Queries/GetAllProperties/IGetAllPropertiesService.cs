using System.Collections.Generic;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Application.Services.Products.Queries.GetAllPropertiesService
{
    public interface IGetAllPropertiesService
    {
        Task<ICollection<RequestGetAllPropertiesDto>> Execute();
    }
}
