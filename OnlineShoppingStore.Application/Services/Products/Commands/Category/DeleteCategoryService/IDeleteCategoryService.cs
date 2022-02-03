using OnlineShoppingStore.Common.ResultDto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Application.Services.Products.Commands.DeleteCategoryService
{
    public interface IDeleteCategoryService
    {
        ResultDto ExecuteDeleteCategory(long id);
    }
}
