using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OnlineShoppingStore.Domain.Entities.Cart;
using System;

namespace OnlineShoppingStore.Persistance.Configurations.CartConfiguration
{
    public class CartItemConfiguration : IEntityTypeConfiguration<CartItem>
    {
        public void Configure(EntityTypeBuilder<CartItem> builder)
        {
            if (builder == null)
            {
                throw new NullReferenceException(nameof(builder));
            }
        }
    }
}
