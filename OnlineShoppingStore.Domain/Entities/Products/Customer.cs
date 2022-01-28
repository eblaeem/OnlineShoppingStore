using OnlineShoppingStore.Domain.Entities.Common;
using System.Collections.Generic;

namespace OnlineShoppingStore.Domain.Entities.Products
{
    public class Customer:BaseEntity
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Title { get; set; }
        public string NationalCode { get; set; }
        public string MobileNumber { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }


        public ICollection<Order> Orders { get; set; } = new HashSet<Order>();

    }
}
