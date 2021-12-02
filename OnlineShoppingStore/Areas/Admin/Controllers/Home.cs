using Microsoft.AspNetCore.Mvc;

namespace OnlineShoppingStore.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class Home : Controller
    {
        public IActionResult Dashboard()
        {
            return View();
        }
    }
}
