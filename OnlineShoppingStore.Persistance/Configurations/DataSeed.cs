//using Microsoft.AspNetCore.Builder;
//using Microsoft.AspNetCore.Identity;
//using Microsoft.Extensions.DependencyInjection;
//using OnlineShoppingStore.Domain.Entities.UserEntity;
//using OnlineShoppingStore.Persistance.Context;
//using System.Threading.Tasks;

//namespace OnlineShoppingStore.Persistance.Configurations
//{
//    public class DataSeed
//    {

//        public DataSeed(DataBaseContext db, UserManager<User> userManager, RoleManager<Role> roleManager)
//        {

//        }

//        public Task SeedAsync()
//        {

//        }
//        public static void SeedData(IApplicationBuilder app)
//        {
//            using (var scope = app.ApplicationServices.CreateScope())
//            {
//                var dataSeed = ActivatorUtilities.CreateInstance<DataSeed>(scope.ServiceProvider);
//                dataSeed.SeedAsync().GetAwaiter().GetResult();
//            }
//        }
//    }
//}
