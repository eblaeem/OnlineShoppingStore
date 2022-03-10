using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OnlineShoppingStore.Domain.Entities.Products;
using System;

namespace OnlineShoppingStore.Persistance.Configurations.ProductConfigurations
{
    public class OrderStatusConfigurations : IEntityTypeConfiguration<OrderStatus>
    {
        public void Configure(EntityTypeBuilder<OrderStatus> builder)
        {
            if (builder == null)
            {
                throw new ArgumentNullException(nameof(builder));
            }

            builder.HasKey(OrderStatus => new
            {
                OrderStatus.OrderId,
                OrderStatus.StatusId
            });

            builder
                .HasOne(OrderStatus => OrderStatus.Order)
                .WithMany(Order => Order.OrderStatuses)
                .HasForeignKey(OrderStatus => OrderStatus.OrderId);

            builder
                .HasOne(OrderStatus => OrderStatus.Status)
                .WithMany(status => status.OrderStatuses)
                .HasForeignKey(OrderStatus => OrderStatus.StatusId);
        }
    }
}
