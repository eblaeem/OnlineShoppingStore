using Microsoft.EntityFrameworkCore;
using OnlineShoppingStore.Application.Interfaces.Context;
using OnlineShoppingStore.Common.RoleName;
using OnlineShoppingStore.Domain.Entities.Products;
using OnlineShoppingStore.Domain.Entities.Setting;
using OnlineShoppingStore.Domain.Entities.User;

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


        public DbSet<CustomizerSetting> CustomizerSettings { get; set; }
        public DbSet<SettingValue> SettingValues { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            SeedData(modelBuilder);
            HasColumnType(modelBuilder);

            modelBuilder.Entity<User>().HasIndex(x => x.Email).IsUnique();

            modelBuilder.Entity<ProductCategory>().HasKey(pc => new { pc.ProductId, pc.CategoryId });
            modelBuilder.Entity<ProductProperty>().HasKey(pp => new { pp.ProductId, pp.PropertyId });
            modelBuilder.Entity<OrderStatus>().HasKey(os => new { os.OrderId, os.StatusId });
            modelBuilder.Entity<OrderItem>().HasKey(oi => new { oi.OrderId, oi.ProductId });

            modelBuilder.Entity<ProductCategory>().HasOne<Product>(pc => pc.Product)
                        .WithMany(p => p.ProductCategories).HasForeignKey(pc => pc.ProductId);

            modelBuilder.Entity<ProductCategory>().HasOne<Category>(pc => pc.Category)
                        .WithMany(c => c.ProductCategories).HasForeignKey(pc => pc.CategoryId);

            modelBuilder.Entity<ProductProperty>().HasOne<Product>(pp => pp.Product)
                        .WithMany(p => p.ProductProperties).HasForeignKey(pp => pp.ProductId);

            modelBuilder.Entity<ProductProperty>().HasOne<Property>(pp => pp.Property)
                        .WithMany(p => p.ProductProperties).HasForeignKey(pp => pp.PropertyId);

            modelBuilder.Entity<OrderStatus>().HasOne<Order>(os => os.Order)
                        .WithMany(o => o.OrderStatuses).HasForeignKey(os => os.OrderId);

            modelBuilder.Entity<OrderStatus>().HasOne<Status>(os => os.Status)
                        .WithMany(s => s.OrderStatuses).HasForeignKey(os => os.StatusId);

            modelBuilder.Entity<Order>().HasMany(o => o.Items).WithOne(i => i.Order);
            modelBuilder.Entity<Product>().HasMany(p => p.Costs).WithOne(c => c.Product);
            modelBuilder.Entity<Product>().HasMany(p => p.Images).WithOne(e => e.Product);
            modelBuilder.Entity<Customer>().HasMany(c=>c.Orders).WithOne(o => o.Customer);
            modelBuilder.Entity<PropertyType>().HasMany(p => p.Properties).WithOne(p => p.PropertyType);


            modelBuilder.Entity<CustomizerSetting>().HasKey(x => x.Key);
            modelBuilder.Entity<CustomizerSetting>().Property(x => x.Key).HasMaxLength(200);
            modelBuilder.Entity<SettingValue>().HasKey(x => new { x.SettingKey, x.Value });
            modelBuilder.Entity<SettingValue>().HasOne(x => x.Setting).WithMany().HasForeignKey(x => x.SettingKey).IsRequired();
        }

        private static void SeedData(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Role>().HasData(new Role { Id = 1, Name = nameof(RoleName.Admin) });
            modelBuilder.Entity<Role>().HasData(new Role { Id = 2, Name = nameof(RoleName.Operator) });
            modelBuilder.Entity<Role>().HasData(new Role { Id = 3, Name = nameof(RoleName.Customer) });
        }

        private static void HasColumnType(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Cost>().Property(c => c.Price).HasColumnType("decimal(10,4)");
            modelBuilder.Entity<Product>().Property(c => c.Quantity).HasColumnType("decimal(10,4)");
            modelBuilder.Entity<Product>().Property(c => c.BasePrice).HasColumnType("decimal(10,4)");
            modelBuilder.Entity<OrderItem>().Property(c => c.OrderQuantity).HasColumnType("decimal(10,4)");
            modelBuilder.Entity<OrderItem>().Property(c => c.Price).HasColumnType("decimal(10,4)");
        }
    }

}
