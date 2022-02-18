using MediatR;
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
using System.Threading.Tasks;

namespace OnlineShoppingStore.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class UsersController : Controller
    {
        private readonly IMediator _mediator;

        public UsersController(IMediator mediator)
        {
            _mediator = mediator;
        }

        public async Task<IActionResult> Index(string searchKey, int page = 1)
        {
            var result = await _mediator.Send(new RequstGetUserDto
            {
                SearchKey = searchKey,
                Page = page
            });
            return View(result);
        }

        [HttpGet]
        public async Task<IActionResult> Create()
        {
            ViewBag.RoleNameSelectList = new SelectList(await _mediator.Send(new RequestGetRolesDto()),"Id","Name");
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Create(CreateViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }

            var result = await _mediator.Send(new RequestCreateUserDto
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
            
            var response = new ApiResult()
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
            ViewBag.RoleNameSelectList = new SelectList(await _mediator.Send(new RequestGetRolesDto()), "Id", "Name");

            var user = await _mediator.Send(new RequestGetUserByIdDto { UserId = id });

            var result = new EditViewModel()
            {
                FullName = user.FullName,
                Email = user.Email,
                RoleId = user.RoleId
            };
            return View(result);
        }

        [HttpPost]
        public async Task<IActionResult> Edit(EditViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }
            var result = await _mediator.Send(new RequestEditDto
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
            });

            var response = new ApiResult()
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
            var result = await _mediator.Send(new RequestDeleteUserDto { UserId = userId });

            var response = new ApiResult()
            {
                IsSuccess = result,
                Message = (result == true ? "کاربر با موفقیت حذف شد." : "حذف کاربر با خطا مواجه شد.")
            };
            return Ok(response);
        }

        [HttpPost]
        public async Task<IActionResult> ChangeUserState(long userId)
        {
            var result = await _mediator.Send(new RequestChangeUserStateDto { UserId = userId });

            var state = result == UserStateEnum.Active ? "فعال" : result == UserStateEnum.Deactive ? "غیرفعال" : "وجود ندارد";
            var response = new ApiResult()
            {
                IsSuccess = result == UserStateEnum.NotFound ? false : true,
                Message = (result != UserStateEnum.NotFound ? $"کاربر با موفقیت {state} شد." : "تغییر وضعیت کاربر با خطا مواجه شد.")
            };
            return Ok(response);
        }
    }
}
