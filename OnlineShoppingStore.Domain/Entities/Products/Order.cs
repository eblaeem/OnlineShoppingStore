using OnlineShoppingStore.Domain.Entities.Common;
using System;
using System.Collections.Generic;

namespace OnlineShoppingStore.Domain.Entities.Products
{
    public class Order : BaseEntity
    {
        public long CustomerId { get; set; }
        public DateTime CreateDate { get; set; }


        public Customer Customer { get; set; }
        public virtual ICollection<OrderItem> Items { get; set; } = new HashSet<OrderItem>();
        public virtual ICollection<OrderStatus> OrderStatuses { get; set; } = new List<OrderStatus>(); //stack
    }
}
