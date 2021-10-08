using Microsoft.AspNetCore.Mvc;

namespace OnlineShoppingStore.Areas.Admin.Controllers
{
    public class UsersController : Controller
    {
        [Area("Admin")]
        public IActionResult Index()
        {
            return View();
        }
    }
}
