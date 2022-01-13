using Microsoft.EntityFrameworkCore;
using OnlineShoppingStore.Domain.Entities.Products;
using OnlineShoppingStore.Domain.Entities.Setting;
using OnlineShoppingStore.Domain.Entities.User;
using System.Threading;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Application.Interfaces.Context
{
    public interface IDataBaseContext
    {
        DbSet<User> Users { get; set; }
        DbSet<Role> Roles { get; set; }
        DbSet<UserRole> UserRoles { get; set; }
        DbSet<Category> Categories { get; set; }
        DbSet<CustomizerSetting> CustomizerSettings { get; set; }


        int SaveChanges(bool acceptAllChangesOnSuccess);
        int SaveChanges();
        Task<int> SaveChangesAsync(bool acceptAllChangesOnSuccess, CancellationToken cancellationToken = new CancellationToken());
        Task<int> SaveChangesAsync(CancellationToken cancellationToken = new CancellationToken());
    }
}
