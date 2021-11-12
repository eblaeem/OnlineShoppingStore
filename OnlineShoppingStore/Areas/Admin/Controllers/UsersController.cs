using Microsoft.AspNetCore.Mvc;
using OnlineShoppingStore.Application.Services.Users.Queries.GetUsers;

namespace OnlineShoppingStore.Areas.Admin.Controllers
{
    public class UsersController : Controller
    {
        private readonly IGetUsersService _getUsersService;

        public UsersController(IGetUsersService getUsersService)
        {
            _getUsersService = getUsersService;
        }

        [Area("Admin")]
        public IActionResult Index(string searchKey, int page =1)
        {
            return View(_getUsersService.ExecuteGetUsersDtos(
                new RequstGetUserDto
                {
                    SearchKey = searchKey,
                    Page = page
                }));
        }
    }
}
