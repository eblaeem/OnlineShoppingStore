using Microsoft.EntityFrameworkCore;
using OnlineShoppingStore.Domain.Entities.User;

namespace OnlineShoppingStore.Persistance.Context
{
    public class DataBaseContext:DbContext
    {
        public DataBaseContext(DbContextOptions options):base(options)
        {

        }
        public DbSet<User> Users { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<UserRole> UserRoles { get; set; }
    }
}
