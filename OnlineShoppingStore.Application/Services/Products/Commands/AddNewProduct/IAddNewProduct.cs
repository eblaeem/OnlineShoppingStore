using OnlineShoppingStore.Common.ResultDto;

namespace OnlineShoppingStore.Application.Services.Products
{
    public interface IAddNewProductService
    {
        ResultDto ExecuteAddNewProduct(long? ParentId, string Name);
    }
}
