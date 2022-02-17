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
using OnlineShoppingStore.Common.ResultDto;
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
            return View(_getUsersService.ExecuteGetUsers(
                new RequstGetUserDto
                {
                    SearchKey = searchKey,
                    Page = page
                }));
        }

        [HttpGet]
        public async Task<IActionResult> Create()
        {
            ViewBag.RoleNameSelectList = new SelectList(await _getRolesService.ExecuteGetRole(), "Id", "Name");
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Create(CreateViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }

            var result = await _createUserService.ExecuteCreateUser(new RequestCreateUserDto
            {
                FullName = model.FullName,
                Email = model.Email,
                Password = model.Password,
                RePassword = model.RePassword,
                Roles = new List<RolesCreateUserDto>()
                {
                    new RolesCreateUserDto()
                    {
                        Id = model.RoleId
                    }
                }
            });
            var response = new ResultDto()
            {
                IsSuccess = result.Result,
                Message = (result.Result == true ? "ثبت نام کاربر با موفقیت انجام شد." : "ثبت نام کاربر با خطا مواجه شد.")
            };

            TempData["IsSuccess"] = response.IsSuccess;
            TempData["Message"] = response.Message;

            return View(model);
        }

        [HttpGet]
        public async Task<IActionResult> Edit(long id)
        {
            ViewBag.RoleNameSelectList = new SelectList(await _getRolesService.ExecuteGetRole(), "Id", "Name");

            var user = await _getUserByIdService.ExecuteGetUserById(id);

            var result = new EditViewModel()
            {
                FullName = user.FullName,
                Email = user.Email,
                RoleId = user.RoleId
            };
            return View(result);
        }

        [HttpPost]
        public async Task<IActionResult> Edit(EditViewModel model, CancellationToken cancellationToken)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }

            var result = await _editUserService.ExecuteEditUser(new RequestEditDto
            {
                Id = model.Id,
                FullName = model.FullName,
                Email = model.Email,
                Password = model.Password,
                RePassword = model.RePassword,
                Roles = new List<RolesCreateUserDto>()
                {
                    new RolesCreateUserDto()
                    {
                        Id=model.RoleId
                    }
                },
            }, cancellationToken);

            var response = new ResultDto()
            {
                IsSuccess = result,
                Message = (result == true ? "ویرایش کاربر با موفقیت انجام شد." : "ویرایش کاربر با خطا مواجه شد."),
            };

            TempData["IsSuccess"] = response.IsSuccess;
            TempData["Message"] = response.Message;

            return View(model);
            //return RedirectToAction("Index");
        }

        [HttpPost]
        public async Task<IActionResult> Delete(long userId)
        {
            var result = await (_deleteUserService.ExecuteDeleteUser(userId));
            var response = new ResultDto()
            {
                IsSuccess = result,
                Message = (result == true ? "کاربر با موفقیت حذف شد." : "حذف کاربر با خطا مواجه شد.")
            };
            return Ok(response);
        }

        [HttpPost]
        public async Task<IActionResult> ChangeUserState(long userId)
        {
            var result = await _changeUserStateService.Execute(userId);
            var state = result == UserStateEnum.Active ? "فعال" : result == UserStateEnum.Deactive ? "غیرفعال" : "وجود ندارد";
            var response = new ResultDto()
            {
                IsSuccess = result == UserStateEnum.NotFound ? false : true,
                Message = (result != UserStateEnum.NotFound ? $"کاربر با موفقیت {state} شد." : "تغییر وضعیت کاربر با خطا مواجه شد.")
            };
            return Ok(response);
        }
    }
}
