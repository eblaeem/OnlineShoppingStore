using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Areas.Admin.Views.Shared.Components.SidebarMenu
{
    public class SidebarMenu:ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync()
        {
            return View("Default");
        }
    }
}
