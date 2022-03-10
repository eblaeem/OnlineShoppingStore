using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OnlineShoppingStore.Domain.Entities.Products;
using System;

namespace OnlineShoppingStore.Persistance.Configurations.ProductConfigurations
{
    public class ProductConfigurations : IEntityTypeConfiguration<Product>
    {
        public void Configure(EntityTypeBuilder<Product> builder)
        {
            if (builder == null)
            {
                throw new ArgumentNullException(nameof(builder));
            }

            builder
                .HasMany(Product => Product.Costs)
                .WithOne(Cost => Cost.Product);

            builder
                .HasMany(Product => Product.Images)
                .WithOne(Image =>Image.Product);
        }
    }
}
