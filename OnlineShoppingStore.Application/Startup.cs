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
using System.Linq;

namespace OnlineShoppingStore.Application
{
    public static class Startup
    {
        public static void ConfigureAppServices(this IServiceCollection services, IConfiguration configuration)
        {
            //var allServicesBasedOnIService = typeof(IService).Assembly.GetTypes()
            //.Where(x => typeof(IService).IsAssignableFrom(x) && !x.IsAbstract && x.IsClass);
            //foreach (var service in allServicesBasedOnIService)
            //{
            //    var intf = service.GetInterfaces().FirstOrDefault(x => typeof(IService).IsAssignableFrom(x));
            //    if (intf != null)
            //    {
            //        services.AddScoped(intf, service);
            //    }
            //    else
            //    {
            //        services.AddScoped(service);
            //    }
            //}
            services.AddScoped<IGetUsersService, GetUsersService>();
            services.AddScoped<IGetUserByIdService, GetUserByIdService>();
            services.AddScoped<ICreateUserService, CreateUserService>();
            services.AddScoped<IGetRolesService, GetRolesService>();
            services.AddScoped<IDeleteUserService, DeleteUserService>();
            services.AddScoped<IChangeUserStateService, ChangeUserStateSerive>();
            services.AddScoped<IEditUserService, EditUserService>();
            services.AddScoped<IGetUserCountService, GetUserCountService>();
            services.AddScoped<IUserLoginService, UserLoginService>();
        }
    }
}
