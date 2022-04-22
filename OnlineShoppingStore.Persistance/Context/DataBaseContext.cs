using Microsoft.EntityFrameworkCore;
using OnlineShoppingStore.Application.Interfaces.Context;
using OnlineShoppingStore.Common.RoleName;
using OnlineShoppingStore.Domain.Entities.AboutUs;
using OnlineShoppingStore.Domain.Entities.HomePage.MainSlider;
using OnlineShoppingStore.Domain.Entities.Products;
using OnlineShoppingStore.Domain.Entities.Setting;
using OnlineShoppingStore.Domain.Entities.User;
using OnlineShoppingStore.Persistance.Configurations.AboutUsConfiguration;
using OnlineShoppingStore.Persistance.Configurations.ProductConfigurations;
using OnlineShoppingStore.Persistance.Configurations.SettingConfigurations;
using OnlineShoppingStore.Persistance.Configurations.UserConfigurations;

namespace OnlineShoppingStore.Persistance.Context
{
    public class DataBaseContext : DbContext, IDataBaseContext
    {
        public DataBaseContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<User> Users { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<UserRole> UserRoles { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Cost> Costs { get; set; }
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Image> Images { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderItem> OrderItems { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<ProductCategory> ProductCategories { get; set; }
        public DbSet<ProductProperty> ProductProperties { get; set; }
        public DbSet<PropertyType> PropertyTypes { get; set; }
        public DbSet<Property> Properties { get; set; }
        public DbSet<Status> Status { get; set; }
        public DbSet<StoreDetails> StoreDetails { get; set; }
        public DbSet<MainSlider> MainSliders { get; set; }



        public DbSet<CustomizerSetting> CustomizerSettings { get; set; }
        public DbSet<SettingValue> SettingValues { get; set; }
        

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.ApplyConfiguration(new UserConfiguration());
            modelBuilder.ApplyConfiguration(new ProductCategoryConfigurations());
            modelBuilder.ApplyConfiguration(new ProductPropertyConfigurations());
            modelBuilder.ApplyConfiguration(new OrderStatusConfigurations());
            modelBuilder.ApplyConfiguration(new OrderItemConfigurations());
            modelBuilder.ApplyConfiguration(new OrderConfigurations());
            modelBuilder.ApplyConfiguration(new ProductConfigurations());
            modelBuilder.ApplyConfiguration(new CustomerConfigurations());
            modelBuilder.ApplyConfiguration(new PropertyTypeConfigurations());
            modelBuilder.ApplyConfiguration(new CustomizerSettingConfiguration());
            modelBuilder.ApplyConfiguration(new SettingValueConfiguration());
            modelBuilder.ApplyConfiguration(new StoreDetailsConfiguration());


            SeedData(modelBuilder);

            modelBuilder.SetDecimalPrecision();



            //var types = typeof(OrderItemConfigurations)
            //    .Assembly.GetExportedTypes()
            //    .Where(t => t.GetInterfaces()
            //    .Any(i => i.IsGenericType && i.GetGenericTypeDefinition() == typeof(IEntityTypeConfiguration<>)));

            //modelBuilder.ApplyConfigurationsFromAssembly(typeof(OrderItemConfigurations).Assembly);
        }

        private static void SeedData(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Role>().HasData(new Role { Id = 1, Name = nameof(RoleName.Admin) });
            modelBuilder.Entity<Role>().HasData(new Role { Id = 2, Name = nameof(RoleName.Operator) });
            modelBuilder.Entity<Role>().HasData(new Role { Id = 3, Name = nameof(RoleName.Customer) });
        }
    }

}
