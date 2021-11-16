using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using OnlineShoppingStore.Application.Services.Users.Commands.CreateUser;
using OnlineShoppingStore.Application.Services.Users.Queries.GetRoles;
using OnlineShoppingStore.Application.Services.Users.Queries.GetUsers;
using OnlineShoppingStore.Areas.Admin.Models;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

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

        public IActionResult Index(string searchKey, int page = 1)
        {
            return View(_getUsersService.ExecuteGetUsersDtos(
                new RequstGetUserDto
                {
                    SearchKey = searchKey,
                    Page = page
                }));
        }

        [HttpGet]
        public async Task<IActionResult> Create()
        {
            ViewBag.RoleNameSelectList = new SelectList(_getRolesService.ExecuteGetRole().Result, "Id", "Name");
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Create(CreateViewModel model, CancellationToken cancellationToken)
        {
            var result = _createUserService.ExecuteCreateUser(new RequsetCreateUserDto
            {
                FullName = model.FullName,
                Email = model.Email,
                Roles = new List<RolesCreateUserDto>()
                    {
                        new RolesCreateUserDto()
                        {
                            Id = model.RoleId
                        }
                    }
            }, cancellationToken);
            return Json(result);
        }
    }
}
