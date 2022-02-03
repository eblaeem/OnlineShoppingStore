using OnlineShoppingStore.Common.ResultDto;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static OnlineShoppingStore.Application.Services.Products.Commands.EditCategoryService.EditCategoryService;

namespace OnlineShoppingStore.Application.Services.Products.Commands.EditCategoryService
{
    public interface IEditCategoryService
    {
        ResultDto ExecuteEditCategory(RequestEditDto requestEditDto);
    }
}
