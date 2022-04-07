using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OnlineShoppingStore.Domain.Entities.AboutUs;
using System;

namespace OnlineShoppingStore.Persistance.Configurations.AboutUsConfiguration
{
    public class StoreDetailsConfiguration: IEntityTypeConfiguration<StoreDetails>
    {
        public void Configure(EntityTypeBuilder<StoreDetails> builder)
        {

            if (builder == null)
            {
                throw new ArgumentNullException(nameof(builder));
            }
        }
    }
}
