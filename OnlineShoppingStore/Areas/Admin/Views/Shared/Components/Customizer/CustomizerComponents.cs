using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Areas.Admin.Views.Shared.Components.Customizer
{
    public class Customizer:ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync()
        {
            return View("Default");
        }
    }
}
