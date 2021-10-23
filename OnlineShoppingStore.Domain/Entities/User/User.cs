using System.Collections.Generic;

namespace OnlineShoppingStore.Domain.Entities.User
{
    public class User
    {
        public long Id { get; set; }
        public string FullName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }


        public ICollection<UserRole> UserRoles { get; set; }

    }
}
