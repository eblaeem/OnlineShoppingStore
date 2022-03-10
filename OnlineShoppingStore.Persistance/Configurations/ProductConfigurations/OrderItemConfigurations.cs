using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OnlineShoppingStore.Domain.Entities.Products;
using System;

namespace OnlineShoppingStore.Persistance.Configurations.ProductConfigurations
{
    public class OrderItemConfigurations : IEntityTypeConfiguration<OrderItem>
    {
        public void Configure(EntityTypeBuilder<OrderItem> builder)
        {
            if (builder == null)
            {
                throw new ArgumentNullException(nameof(builder));
            }

            builder.HasKey(OrderItem => new
            {
                OrderItem.OrderId,
                OrderItem.ProductId
            });

            builder
                .HasOne(OderItem => OderItem.Order)
                .WithMany(Order => Order.Items)
                .HasForeignKey(OrderItem => OrderItem.OrderId);

            builder
                .HasOne(OrderItem => OrderItem.Product)
                .WithMany(Product => Product.Items)
                .HasForeignKey(OrderItem => OrderItem.ProductId);

        }
    }
}
