using OnlineShoppingStore.Common.ResultDto;
using System.Collections.Generic;

namespace OnlineShoppingStore.Application.Services.Products.Queries.GetAllProductService
{
    public interface IGetAllProductService
    {
        ResultDto<ICollection<GetAllProductDto>> ExecuteGetAllProductService();
    }
}
