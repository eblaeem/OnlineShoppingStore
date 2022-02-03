using OnlineShoppingStore.Common.ResultDto;

namespace OnlineShoppingStore.Application.Services.Products
{
    public interface ICreateCategoryService
    {
        ResultDto ExecuteCreateCategory(long? ParentId, string Name);
    }
}
