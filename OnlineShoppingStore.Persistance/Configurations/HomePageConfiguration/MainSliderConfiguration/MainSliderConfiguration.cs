using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OnlineShoppingStore.Domain.Entities.HomePage.MainSlider;
using System;

namespace OnlineShoppingStore.Persistance.Configurations.HomePageConfiguration.MainSliderConfiguration
{
    internal class MainSliderConfiguration : IEntityTypeConfiguration<MainSlider>
    {
        public void Configure(EntityTypeBuilder<MainSlider> builder)
        {
            if (builder == null)
            {
                throw new ArgumentNullException(nameof(builder));
            }
        }
    }
}
