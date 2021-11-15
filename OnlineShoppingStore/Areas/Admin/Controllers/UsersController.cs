using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using OnlineShoppingStore.Application.Services.Users.Commands.CreateUser;
using OnlineShoppingStore.Application.Services.Users.Queries.GetRoles;
using OnlineShoppingStore.Application.Services.Users.Queries.GetUsers;

namespace OnlineShoppingStore.Areas.Admin.Controllers
{

    [Area("Admin")]
    public class UsersController : Controller
    {
        private readonly IGetUsersService _getUsersService;
        private readonly ICreateUserService _createUserService;
        private readonly IGetRolesService _getRolesService;

        public UsersController(IGetUsersService getUsersService, 
            ICreateUserService createUserService,
            IGetRolesService getRolesService)
        {
            _getUsersService = getUsersService;
            _createUserService = createUserService;
            _getRolesService = getRolesService;
        }

        public IActionResult Index(string searchKey, int page =1)
        {
            return View(_getUsersService.ExecuteGetUsersDtos(
                new RequstGetUserDto
                {
                    SearchKey = searchKey,
                    Page = page
                }));
        }

        [HttpGet]
        public IActionResult Create()
        {
            ViewBag.RoleNameSelectList =new SelectList(_getRolesService.ExecuteGetRole().Result,"Id","Name");
            return View();
        }
    }
}
