using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Mvc;
using OnlineShoppingStore.Application.Services.Users.Commands.CreateUser;
using OnlineShoppingStore.Common.RoleName;
using OnlineShoppingStore.Models.ViewModels.AuthenticationViewModel;
using System.Collections.Generic;
using System.Security.Claims;

namespace OnlineShoppingStore.Controllers
{
    public class AuthenticationController : Controller
    {
        private readonly ICreateUserService _createUserService;

        public AuthenticationController(ICreateUserService createUserService)
        {
            _createUserService = createUserService;
        }

        [HttpGet]
        public IActionResult SignUp()
        {
            return View();
        }

        [HttpPost]
        public IActionResult SignUp(SignUpViewModel request)
        {
            var signUpResult = _createUserService.ExecuteCreateUser(new RequsetCreateUserDto
            {
                FullName = request.FullName,
                Email = request.Email,
                Password = request.Password,
                RePassword = request.RePassword,
                Roles = new List<RolesCreateUserDto>()
                {
                    new RolesCreateUserDto
                    {
                        Id = 3
                    }
                }
            });

            if (signUpResult.IsSuccess)
            {
                var claims = new List<Claim>()
                {
                    new Claim(ClaimTypes.NameIdentifier, signUpResult.Result.UserId.ToString()),
                    new Claim(ClaimTypes.Name, request.FullName),
                    new Claim(ClaimTypes.Email, request.Email),
                    new Claim(ClaimTypes.Role, RoleName.Customer),
                };

                var identity = new ClaimsIdentity(claims,CookieAuthenticationDefaults.AuthenticationScheme);
                var principle = new ClaimsPrincipal(identity);
                var properties = new AuthenticationProperties()
                {
                    IsPersistent = true
                };
                HttpContext.SignInAsync(principle, properties);
            }
            return View();
        }
    }
}
