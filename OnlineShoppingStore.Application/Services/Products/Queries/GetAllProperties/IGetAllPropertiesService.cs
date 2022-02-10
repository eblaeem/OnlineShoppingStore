using OnlineShoppingStore.Common.ResultDto;
using System.Collections.Generic;

namespace OnlineShoppingStore.Application.Services.Products.Queries.GetAllPropertiesService
{
    public interface IGetAllPropertiesService
    {
        ResultDto<ICollection<RequestGetAllPropertiesDto>> ExecuteGetAllProperties();
    }
}
