namespace OnlineShoppingStore.Application.Services.Products.Queries.GetAllProductService
{
    public class GetAllProductDto
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string CatName { get; set; }
        public string SubCatName { get; set; }
        public string CreatedDate { get; set; }
        public bool Displayed { get; set; }
        public decimal BasePrice { get; set; }
    }
}
