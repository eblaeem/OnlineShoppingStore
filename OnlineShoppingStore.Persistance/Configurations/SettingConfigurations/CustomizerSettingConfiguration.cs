using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OnlineShoppingStore.Domain.Entities.Setting;
using System;

namespace OnlineShoppingStore.Persistance.Configurations.SettingConfigurations
{
    public class CustomizerSettingConfiguration : IEntityTypeConfiguration<CustomizerSetting>
    {
        public void Configure(EntityTypeBuilder<CustomizerSetting> builder)
        {
            if (builder == null)
            {
                throw new ArgumentNullException(nameof(builder));
            }

            builder
                .HasKey(CustomizerSetting => CustomizerSetting.Key);

            builder
                .Property(CustomizerSetting => CustomizerSetting.Key).HasMaxLength(200);
        }
    }
}
