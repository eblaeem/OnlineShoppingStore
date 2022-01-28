namespace OnlineShoppingStore.Domain.Entities.Products
{
    public class OrderItem
    {
        public long ProductId { get; set; }
        public long OrderId { get; set; }
        public decimal Price { get; set; }
        public decimal OrderQuantity { get; set; }


        public Order Order { get; set; }
        public Product Product { get; set; }

    }
}
