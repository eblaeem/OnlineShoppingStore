using System.Threading.Tasks;

namespace OnlineShoppingStore.Application.Services.Products.Commands.Products
{
    public interface ICreateProductService
    {
        Task<bool> Execute(RequestCreateProductDto request);
    }
}
