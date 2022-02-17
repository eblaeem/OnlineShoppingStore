﻿using Microsoft.AspNetCore.Authentication;
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
        private readonly ICreateUserService _createUserService;
        private readonly IUserLoginService _userLoginService;

        public AuthenticationController(ICreateUserService createUserService, IUserLoginService userLoginService)
        {
            _createUserService = createUserService;
            _userLoginService = userLoginService;
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
            var signUpResult = await _createUserService.ExecuteCreateUser(new RequestCreateUserDto
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
            var response = new ResultDto()
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
            var signInResult =await _userLoginService.ExecuteUserLogin(new RequsetloginDto
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
                    new Claim(ClaimTypes.NameIdentifier, signInResult.UserId.ToString()),
                    new Claim(ClaimTypes.Name, signInResult.FullName),
                    new Claim(ClaimTypes.Email, model.Email),
                    new Claim(ClaimTypes.Role, signInResult.Roles)
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
