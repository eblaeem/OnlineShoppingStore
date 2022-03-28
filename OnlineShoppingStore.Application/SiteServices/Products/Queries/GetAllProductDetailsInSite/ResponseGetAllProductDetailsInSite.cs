using System.Collections.Generic;

namespace OnlineShoppingStore.Application.SiteServices.Products.Queries.GetAllProductDetailsInSite
{
    public class ResponseGetAllProductDetailsInSite
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Category { get; set; }
        public string SubCategory { get; set; }
        public string Brand { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public decimal Inventory { get; set; }
        public bool Displayed { get; set; }
        public List<ProductDetailFeatureDto> Features { get; set; }
        public List<ProductDetailImagesDto> Images { get; set; }
    }

    public class ProductDetailFeatureDto
    {
        public long Id { get; set; }
        public string DisplayName { get; set; }
        public string Value { get; set; }
    }
    public class ProductDetailImagesDto
    {
        public long Id { get; set; }
        public string Src { get; set; }
    }
}
