using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using OnlineShoppingStore.Application.Services.Users.Commands.ChangeUserState;
using OnlineShoppingStore.Application.Services.Users.Commands.CreateUser;
using OnlineShoppingStore.Application.Services.Users.Commands.DeleteUser;
using OnlineShoppingStore.Application.Services.Users.Commands.EditUser;
using OnlineShoppingStore.Application.Services.Users.Queries.GetRoles;
using OnlineShoppingStore.Application.Services.Users.Queries.GetUserById;
using OnlineShoppingStore.Application.Services.Users.Queries.GetUsers;
using OnlineShoppingStore.Areas.Admin.Models;
using System.Collections.Generic;
using System.Net;
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
        private readonly IDeleteUserService _deleteUserService;
        private readonly IChangeUserStateService _changeUserStateService;
        private readonly IEditUserService _editUserService;
        private readonly IGetUserByIdService _getUserByIdService;

        public UsersController(IGetUsersService getUsersService,
            ICreateUserService createUserService,
            IGetRolesService getRolesService,
            IDeleteUserService deleteUserService,
            IChangeUserStateService changeUserStateService,
            IEditUserService editUserService,
            IGetUserByIdService getUserByIdService)
        {
            _getUsersService = getUsersService;
            _createUserService = createUserService;
            _getRolesService = getRolesService;
            _deleteUserService = deleteUserService;
            _changeUserStateService = changeUserStateService;
            _editUserService = editUserService;
            _getUserByIdService = getUserByIdService;
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
        public IActionResult Create()
        {
            ViewBag.RoleNameSelectList = new SelectList(_getRolesService.ExecuteGetRole().Result, "Id", "Name");
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Create(CreateViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }

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
            });

            return RedirectToAction("Index");
        }

        [HttpGet]
        public IActionResult Edit(long id)
        {
            ViewBag.RoleNameSelectList = new SelectList(_getRolesService.ExecuteGetRole().Result, "Id", "Name");
            var user = _getUserByIdService.ExecuteGetUserById(id);
            
            var model = new EditViewModel()
            {
                FullName = user.Result.FullName,
                Email = user.Result.Email,
                RoleId = user.Result.RoleId
            };
            return View(model);
        }

        [HttpPost]
        public async Task<IActionResult> Edit(EditViewModel model, CancellationToken cancellationToken)
        {
            //var user = _editUserService.ExecuteEditUser(model);
            if (!ModelState.IsValid)
            {
                return View(model);
            }

            var result = _editUserService.ExecuteEditUser(new RequestEditDto
            {
                Id = model.Id,
                FullName = model.FullName,
                Email = model.Email,
                Roles = new List<RolesCreateUserDto>()
                {
                    new RolesCreateUserDto()
                    {
                        Id=model.RoleId
                    }
                },
            }, cancellationToken);

            return RedirectToAction("Index");
        }


        [HttpGet]
        public IActionResult Delete(long? id)
        {
            if (id == null)
            {
                return new StatusCodeResult((int)HttpStatusCode.BadRequest);
            }
            var user = _deleteUserService.ExecuteDeleteUser((long)id);
            if (user == null)
            {
                return StatusCode(404);
            }
            return View(user);
        }

        [HttpPost]
        public IActionResult Delete(long id)
        {
            _deleteUserService.ExecuteDeleteUser(id);
            return RedirectToAction("Index");
        }

        [HttpPost]
        public IActionResult ChangeUserState(long userId)
        {
            return Json(_changeUserStateService.ExecuteChangeUserStateService(userId));
        }
    }
}
