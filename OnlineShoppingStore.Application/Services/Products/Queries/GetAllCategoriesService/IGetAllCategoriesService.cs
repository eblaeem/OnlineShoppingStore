using OnlineShoppingStore.Common.ResultDto;
using System.Collections.Generic;

namespace OnlineShoppingStore.Application.Services.Products.Queries.GetAllCategoriesService
{
    public interface IGetAllCategoriesService
    {
        ResultDto<ICollection<AllCategoriesDto>> ExecuteGetAllCategories();
    }
}
