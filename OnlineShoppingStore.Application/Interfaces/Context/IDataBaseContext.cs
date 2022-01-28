﻿using Microsoft.EntityFrameworkCore;
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
        DbSet<Cost> Costs { get; set; }
        DbSet<CostStrategy> CostStrategies { get; set; }
        DbSet<Customer> Customers { get; set; }
        DbSet<Image> Images { get; set; }
        DbSet<Order> Orders { get; set; }
        DbSet<OrderItem> OrderItems { get; set; }
        DbSet<Product> Products { get; set; }
        DbSet<ProductCategory> ProductCategories { get; set; }
        DbSet<ProductProperty> ProductProperties { get; set; }
        DbSet<Property> Properties { get; set; }
        DbSet<Status> Status { get; set; }

        DbSet<CustomizerSetting> CustomizerSettings { get; set; }
        DbSet<SettingValue> SettingValues { get; set; }


        int SaveChanges(bool acceptAllChangesOnSuccess);
        int SaveChanges();
        Task<int> SaveChangesAsync(bool acceptAllChangesOnSuccess, CancellationToken cancellationToken = new CancellationToken());
        Task<int> SaveChangesAsync(CancellationToken cancellationToken = new CancellationToken());
    }
}
