namespace OnlineShoppingStore.Domain.Entities.Products
{
    public class ProductCategory
    {
        private string _tenantId;
        public long ProductId { get; set; }
        public long CategoryId { get; set; }


        public Product Product { get; set; }
        public Category Category { get; set; }
    }
}
