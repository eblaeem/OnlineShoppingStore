using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OnlineShoppingStore.Domain.Entities.Setting;
using System;

namespace OnlineShoppingStore.Persistance.Configurations.SettingConfigurations
{
    public class SettingValueConfiguration : IEntityTypeConfiguration<SettingValue>
    {
        public void Configure(EntityTypeBuilder<SettingValue> builder)
        {
            if (builder == null)
            {
                throw new ArgumentNullException(nameof(builder));
            }

            builder
                .HasKey(SettingValue => new
                {
                    SettingValue.SettingKey,
                    SettingValue.Value
                });
            builder
                .HasOne(SettingValue => SettingValue.Setting)
                .WithMany()
                .HasForeignKey(SettingValue => SettingValue.SettingKey)
                .IsRequired();
        }
    }
}
