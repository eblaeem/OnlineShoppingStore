using OnlineShoppingStore.Application.SiteServices.Products.Queries.GetAllProductsInSite;

namespace OnlineShoppingStore.ViewModels.Products
{
    public class ProductsIndexViewModel
    {
        public OrderingEnum Ordering { get; set; }
        public string SearchKey { get; set; }
        public int Page { get; set; } = 1;
        public int PageSize { get; set; } = 20;
        public long? CatId { get; set; } = null;
    }
}
