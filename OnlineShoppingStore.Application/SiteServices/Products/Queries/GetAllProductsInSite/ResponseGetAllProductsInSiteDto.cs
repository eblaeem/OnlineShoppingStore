using System.Collections.Generic;

namespace OnlineShoppingStore.Application.SiteServices.Products.Queries.GetAllProductsInSite
{
    public class ResponseGetAllProductsInSiteDto
    {
        public List<ResponseGetAllProductsInSite> Products { get; set; }
        public int TotalRow { get; set; }
    }

    public class ResponseGetAllProductsInSite
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
        public int Star { get; set; }
        public string ImgSrc { get; set; }
    }
}
