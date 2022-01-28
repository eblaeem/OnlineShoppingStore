using System;

namespace OnlineShoppingStore.Domain.Entities.Products
{
    public class OrderStatus
    {
        public long OrderId { get; set; }
        public long StatusId { get; set; }
        public DateTime CreateDate { get; set; }


        public Order Order { get;set; }
        public Status Status { get; set; }
    }
}
