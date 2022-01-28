using System.Collections.Generic;

namespace OnlineShoppingStore.Domain.Entities.Products
{
    public class Status
    {
        public long Id { get; set; }
        public string Title { get; set; }


        public virtual ICollection<OrderStatus> OrderStatuses { get; set; } = new HashSet<OrderStatus>();
    }
}
