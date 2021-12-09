using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using OnlineShoppingStore.Application.Interfaces.Context;
using OnlineShoppingStore.Application.Services.Users.Commands.CreateUser;
using OnlineShoppingStore.Application.Services.Users.Queries.GetRoles;
using OnlineShoppingStore.Application.Services.Users.Queries.GetUsers;
using OnlineShoppingStore.Persistance.Context;
using FluentValidation.AspNetCore;
using OnlineShoppingStore.Areas.Admin.Models;
using FluentValidation;
using OnlineShoppingStore.Application.Services.Users.Commands.DeleteUser;
using OnlineShoppingStore.Application.Services.Users.Commands.ChangeUserState;
using OnlineShoppingStore.Application.Services.Users.Commands.EditUser;
using OnlineShoppingStore.Application.Services.Users.Queries.GetUserById;
using OnlineShoppingStore.Application.Services.DashboardInfo.Queries;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Http;
using System;

namespace OnlineShoppingStore
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddAuthentication(options =>
            {
                options.DefaultSignInScheme = CookieAuthenticationDefaults.AuthenticationScheme;
                options.DefaultAuthenticateScheme = CookieAuthenticationDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = CookieAuthenticationDefaults.AuthenticationScheme;
            }).AddCookie(options =>
            {
                options.LoginPath = new PathString("/");
                options.ExpireTimeSpan = TimeSpan.FromMinutes(5.0);
            });

            services.AddScoped<IDataBaseContext, DataBaseContext>();
            services.AddControllers().AddFluentValidation(options =>
            {
                options.RegisterValidatorsFromAssemblyContaining<CreateViewModel>();
            });
            services.AddScoped<IGetUsersService, GetUsersService>();
            services.AddScoped<IGetUserByIdService, GetUserByIdService>();
            services.AddScoped<ICreateUserService, CreateUserService>();
            services.AddScoped<IGetRolesService, GetRolesService>();
            services.AddScoped<IDeleteUserService, DeleteUserService>();
            services.AddScoped<IChangeUserStateService, ChangeUserStateSerive>();
            services.AddScoped<IEditUserService, EditUserService>();
            services.AddScoped<IGetUserCount, GetUserCount>();

            services.AddEntityFrameworkSqlServer().AddDbContext<DataBaseContext>(option =>
            option.UseSqlServer(Configuration.GetConnectionString("OnlineShoppingStoreDb")));
            services.AddControllersWithViews().AddRazorRuntimeCompilation();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }
            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthorization();
            app.UseAuthentication();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "areas",
                    pattern: "{area:exists}/{controller=Home}/{action=Index}/{id?}"
                    );

                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");
            });


        }
    }
}
