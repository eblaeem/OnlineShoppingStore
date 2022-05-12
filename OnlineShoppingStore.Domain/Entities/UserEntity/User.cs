using OnlineShoppingStore.Domain.Entities.Common;
using System.Collections.Generic;

namespace OnlineShoppingStore.Domain.Entities.UserEntity
{
    public class User:BaseEntity<long>
    {
        public string FullName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public bool IsActive { get; set; }


        public ICollection<UserRole> UserRoles { get; set; }

    }
}
