using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OnlineShoppingStore.Domain.Entities.Products;
using System;

namespace OnlineShoppingStore.Persistance.Configurations.ProductConfigurations
{
    public class ProductCategoryConfigurations : IEntityTypeConfiguration<ProductCategory>
    {
        public void Configure(EntityTypeBuilder<ProductCategory> builder)
        {
            if (builder == null)
            {
                throw new ArgumentNullException(nameof(builder));
            }

            builder.HasKey(ProductCategory => new
            {
                ProductCategory.ProductId,
                ProductCategory.CategoryId
            });

            builder
                .HasOne(ProductCategory => ProductCategory.Product)
                .WithMany(product => product.ProductCategories)
                .HasForeignKey(ProductCategory => ProductCategory.ProductId);

            builder
                .HasOne(ProductCategory => ProductCategory.Category)
                .WithMany(product => product.ProductCategories)
                .HasForeignKey(ProductCategory => ProductCategory.CategoryId);
        }
    }
}
