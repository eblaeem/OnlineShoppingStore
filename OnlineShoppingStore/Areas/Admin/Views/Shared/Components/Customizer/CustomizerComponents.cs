using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Areas.Admin.Views.Shared.Components.Customizer
{
    public class Customizer:ViewComponent
    {
        public Task<IViewComponentResult> InvokeAsync()
        {
            return Task.FromResult<IViewComponentResult>(View("Default"));
        }
    }
}
