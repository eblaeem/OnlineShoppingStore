using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;

namespace OnlineShoppingStore.Persistance
{
    public static class EntityFrameworkCoreModelBuilderExtensions
    {
        public static void SetDecimalPrecision(this ModelBuilder builder)
        {
            if (builder == null)
            {
                throw new ArgumentNullException(nameof(builder));
            }

            //Ex: modelBuilder.Entity<Cost>().Property(c => c.Price).HasColumnType("decimal(10,4)");

            foreach (var property in builder.Model.GetEntityTypes()
                .SelectMany(x=>x.GetProperties())
                .Where(p => p.ClrType == typeof(decimal)
                            || p.ClrType == typeof(decimal?)))
            {
                property.SetColumnType("decimal(10,4)");
            }
        }
    }
}
