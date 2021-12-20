using Microsoft.EntityFrameworkCore;
using OnlineShoppingStore.Application.Interfaces.Context;
using OnlineShoppingStore.Common.RoleName;
using OnlineShoppingStore.Domain.Entities.Products;
using OnlineShoppingStore.Domain.Entities.User;

namespace OnlineShoppingStore.Persistance.Context
{
    public class DataBaseContext:DbContext, IDataBaseContext
    {
        public DataBaseContext(DbContextOptions options):base(options)
        {

        }
        public DbSet<User> Users { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<UserRole> UserRoles { get; set; }
        public DbSet<Category> Categories { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            SeedData(modelBuilder);
            ApplyQueryFilter(modelBuilder);

            modelBuilder.Entity<User>().HasIndex(x => x.Email).IsUnique();
        }

        private void SeedData(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Role>().HasData(new Role { Id = 1, Name = nameof(RoleName.Admin) });
            modelBuilder.Entity<Role>().HasData(new Role { Id = 2, Name = nameof(RoleName.Operator) });
            modelBuilder.Entity<Role>().HasData(new Role { Id = 3, Name = nameof(RoleName.Customer) });
        }

        private void ApplyQueryFilter(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().HasQueryFilter(x => x.IsDeleted == false);
        }
    }

}
