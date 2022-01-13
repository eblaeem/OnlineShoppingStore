using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Areas.Admin.Views.Shared.Components.Header
{
    public class Header:ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync()
        {
            return View("Default");
        }
    }
}
