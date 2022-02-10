using OnlineShoppingStore.Common.ResultDto;
using System.Collections.Generic;

namespace OnlineShoppingStore.Application.Services.Products.Queries.GetCategories
{
    public interface IGetCategoriesService
    {
        ResultDto<ICollection<CategoriesDto>> ExecuteIGetCategoriesService(long? parentId);
    }
}
