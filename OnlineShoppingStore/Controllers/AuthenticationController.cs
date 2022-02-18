using MediatR;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Mvc;
using OnlineShoppingStore.Application.Services.Users.Commands.CreateUser;
using OnlineShoppingStore.Application.Services.Users.Commands.UserLogin;
using OnlineShoppingStore.Common.ResultDto;
using OnlineShoppingStore.Common.RoleName;
using OnlineShoppingStore.Models.ViewModels.AuthenticationViewModel;
using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Controllers
{
    public class AuthenticationController : Controller
    {
        private readonly IMediator _mediator;

        public AuthenticationController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public IActionResult SignUp()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> SignUp(SignUpViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }
            var signUpResult = await _mediator.Send(new RequestCreateUserDto
            {
                FullName = model.FullName,
                Email = model.Email,
                Password = model.Password,
                RePassword = model.RePassword,
                Roles = new List<RolesCreateUserDto>()
                {
                    new RolesCreateUserDto
                    {
                        Id = 3
                    }
                }
            });
            var response = new ApiResult()
            {
                IsSuccess = signUpResult.Result,
                Message = signUpResult.Result == true ? "" : ""
            };
            //TO DO: hatman ba previous version check beshe;

            if (response.IsSuccess)
            {

                var claims = new List<Claim>()
                {
                    new Claim(ClaimTypes.NameIdentifier, signUpResult.UserId.ToString()),
                    new Claim(ClaimTypes.Name, model.FullName),
                    new Claim(ClaimTypes.Email, model.Email),
                    new Claim(ClaimTypes.Role, RoleName.Customer),
                };
                var identity = new ClaimsIdentity(claims, CookieAuthenticationDefaults.AuthenticationScheme);
                var principle = new ClaimsPrincipal(identity);
                var properties = new AuthenticationProperties()
                {
                    IsPersistent = true,
                };
                await HttpContext.SignInAsync(principle, properties);

            }
            return View();
        }

        [HttpGet]
        public IActionResult SignIn()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> SignIn(SignInViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }
            var loginResult = await _mediator.Send(new RequestUserloginDto
            {
                Password = model.Password,
                UserName = model.Email
            });

            //if (!signInResult.IsSuccess)
            //{
            //    ViewBag.ErrorMessage = signInResult.Message;
            //    return View();
            //}
            var claims = new List<Claim>()
                {
                    new Claim(ClaimTypes.NameIdentifier, loginResult.UserId.ToString()),
                    new Claim(ClaimTypes.Name, loginResult.FullName),
                    new Claim(ClaimTypes.Email, model.Email),
                    new Claim(ClaimTypes.Role, loginResult.Roles)
                };
            var identity = new ClaimsIdentity(claims, CookieAuthenticationDefaults.AuthenticationScheme);
            var principal = new ClaimsPrincipal(identity);
            var properties = new AuthenticationProperties()
            {
                IsPersistent = true,
                ExpiresUtc = DateTime.Now.AddDays(1)
            };

            await HttpContext.SignInAsync(principal, properties);
            return RedirectToAction("Index", "Home");
        }

        public IActionResult SignOunt()
        {
            HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
            return RedirectToAction("Index", "Home");
        }


    }
}
