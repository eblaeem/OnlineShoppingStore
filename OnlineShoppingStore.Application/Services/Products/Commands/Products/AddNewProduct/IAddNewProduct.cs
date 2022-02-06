using Microsoft.EntityFrameworkCore;
using OnlineShoppingStore.Common.ResultDto;
using System.Linq;

namespace OnlineShoppingStore.Application.Services.Products.Commands.Products
{
    public interface IAddNewProduct
    {
        ResultDto ExecuteAddNewProduct(RequestAddNewProductDto request);
    }
}
