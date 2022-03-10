using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System;

namespace OnlineShoppingStore.Persistance.Configurations.ProductConfigurations
{
    public class PropertyConfigurations : IEntityTypeConfiguration<Property>
    {
        public void Configure(EntityTypeBuilder<Property> builder)
        {
            if (builder == null)
            {
                throw new ArgumentNullException(nameof(builder));
            }
        }
    }
}
