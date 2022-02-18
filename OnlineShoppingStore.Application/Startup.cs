using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using OnlineShoppingStore.Application.Services.Users.Queries.GetUsers;
using System.Linq;

namespace OnlineShoppingStore.Application
{
    public static class Startup
    {
        public static void ConfigureAppServices(this IServiceCollection services, IConfiguration configuration)
        {
            var allServicesBasedOnIService = typeof(IBaseService).Assembly.GetTypes()
            .Where(x => typeof(IBaseService).IsAssignableFrom(x) && !x.IsAbstract && x.IsClass);
            foreach (var service in allServicesBasedOnIService)
            {
                var intf = service.GetInterfaces().FirstOrDefault(x => typeof(IBaseService).IsAssignableFrom(x));
                if (intf != null)
                {
                    services.AddScoped(intf, service);
                }
                else
                {
                    services.AddScoped(service);
                }
            }

        }
    }
}
