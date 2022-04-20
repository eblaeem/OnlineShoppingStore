using System.Collections.Generic;

namespace OnlineShoppingStore.Application.Services.Products.Queries.GetAllProductService
{
    public class ResponseGetAllProductsDto
    {
        public int RowCount { get; set; }
        public int CurrentPage { get; set; }
        public int PageSize { get; set; }


        public List<ResponseGetAllProducts> Products { get; set; }
    }

    public class ResponseGetAllProducts
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
