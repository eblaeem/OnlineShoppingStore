using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OnlineShoppingStore.Domain.Entities.Products;
using System;

namespace OnlineShoppingStore.Persistance.Configurations.ProductConfigurations
{
    public class CostConfigurations : IEntityTypeConfiguration<Cost>
    {
        public void Configure(EntityTypeBuilder<Cost> builder)
        {
            if (builder == null)
            {
                throw new ArgumentNullException(nameof(builder));
            }
        }
    }
}
