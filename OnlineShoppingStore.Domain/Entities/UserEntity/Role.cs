using System.Collections.Generic;

namespace OnlineShoppingStore.Domain.Entities.UserEntity
{
    public class Role
    {
        public long Id { get; set; }
        public string Name { get; set; }


        public ICollection<UserRole> UserRoles { get; set; }
    }
}
