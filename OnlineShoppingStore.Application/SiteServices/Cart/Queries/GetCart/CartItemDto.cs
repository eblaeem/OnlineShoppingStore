namespace OnlineShoppingStore.Application.SiteServices.Cart.Queries.GetCart
{
    public class CartItemDto
    {
        public long Id { get; set; }
        public long ProductId { get; set; }
        public string ProductName { get; set; }
        public string ImageSrc { get; set; }
        public int Count { get; set; }
        public decimal Price { get; set; }
    }

}
