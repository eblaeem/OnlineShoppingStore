using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OnlineShoppingStore.Domain.Entities.Products;
using System;

namespace OnlineShoppingStore.Persistance.Configurations.ProductConfigurations
{
    public class ProductPropertyConfigurations : IEntityTypeConfiguration<ProductProperty>
    {
        public void Configure(EntityTypeBuilder<ProductProperty> builder)
        {
            if (builder == null)
            {
                throw new ArgumentNullException(nameof(builder));
            }
            
            builder.HasKey(ProductProperty => new
            {
                ProductProperty.ProductId,
                ProductProperty.PropertyId
            });

            builder.HasOne(ProductProperty => ProductProperty.Product)
                .WithMany(Product => Product.ProductProperties)
                .HasForeignKey(ProductProperty => ProductProperty.ProductId);

            builder
                .HasOne(ProductProperty => ProductProperty.Property)
                .WithMany(Property => Property.ProductProperties)
                .HasForeignKey(ProductProperty =>ProductProperty.PropertyId);

        }
    }
}
