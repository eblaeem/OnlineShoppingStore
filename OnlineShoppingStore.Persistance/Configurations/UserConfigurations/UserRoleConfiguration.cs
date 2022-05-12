using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OnlineShoppingStore.Domain.Entities.UserEntity;
using System;

namespace OnlineShoppingStore.Persistance.Configurations.UserConfigurations
{
    internal class UserRoleConfiguration : IEntityTypeConfiguration<UserRole>
    {
        public void Configure(EntityTypeBuilder<UserRole> builder)
        {
           if (builder == null)
            {
                throw new ArgumentNullException(nameof(builder));
            }

            builder.HasKey(UserRole => new
            {
                UserRole.UserId,
                UserRole.RoleId
            });

            builder
                .HasOne(UserRole => UserRole.User)
                .WithMany(User => User.UserRoles)
                .HasForeignKey(UserRole => UserRole.UserId);

            builder
                .HasOne(UserRole => UserRole.Role)
                .WithMany(Role => Role.UserRoles)
                .HasForeignKey(UserRole=> UserRole.RoleId);

        }
    }
}
