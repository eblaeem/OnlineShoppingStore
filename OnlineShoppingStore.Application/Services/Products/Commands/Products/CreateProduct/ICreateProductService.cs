using OnlineShoppingStore.Common.ResultDto;

namespace OnlineShoppingStore.Application.Services.Products.Commands.Products
{
    public interface ICreateProductService
    {
        ResultDto ExecuteAddNewProduct(RequestCreateProductDto request);
    }
}
