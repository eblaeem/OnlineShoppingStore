using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Areas.Admin.Views.Shared.Components.Footer
{
    public class Footer:ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync()
        {
            return View("Default");
        }
    }
}
