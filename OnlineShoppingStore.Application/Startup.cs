using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using OnlineShoppingStore.Application.Services.DashboardInfo.Queries;
using OnlineShoppingStore.Application.Services.Users.Commands.ChangeUserState;
using OnlineShoppingStore.Application.Services.Users.Commands.CreateUser;
using OnlineShoppingStore.Application.Services.Users.Commands.DeleteUser;
using OnlineShoppingStore.Application.Services.Users.Commands.EditUser;
using OnlineShoppingStore.Application.Services.Users.Commands.UserLogin;
using OnlineShoppingStore.Application.Services.Users.Queries.GetRoles;
using OnlineShoppingStore.Application.Services.Users.Queries.GetUserById;
using OnlineShoppingStore.Application.Services.Users.Queries.GetUsers;

namespace OnlineShoppingStore.Application
{
    public static class Startup
    {
        public static void ConfigureAppServices(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddScoped<IGetUsersService, GetUsersService>();
            services.AddScoped<IGetUserByIdService, GetUserByIdService>();
            services.AddScoped<ICreateUserService, CreateUserService>();
            services.AddScoped<IGetRolesService, GetRolesService>();
            services.AddScoped<IDeleteUserService, DeleteUserService>();
            services.AddScoped<IChangeUserStateService, ChangeUserStateSerive>();
            services.AddScoped<IEditUserService, EditUserService>();
            services.AddScoped<IGetUserCount, GetUserCount>();
            services.AddScoped<IUserLoginService, UserLoginService>();
        }
    }
}
