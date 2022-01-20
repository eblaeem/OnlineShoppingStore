using OnlineShoppingStore.Common.ResultDto;

namespace OnlineShoppingStore.Application.Services.Products
{
    public interface IAddNewCategoryService
    {
        ResultDto ExecuteAddNewProduct(long? ParentId, string Name);
    }
}
