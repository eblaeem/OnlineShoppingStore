using Microsoft.AspNetCore.Http;
using OnlineShoppingStore.Domain.Entities.Products;
using System.Collections.Generic;

namespace OnlineShoppingStore.Application.Services.Products.Commands.Products
{
    public class RequestAddNewProdductDto
    {
        public long CategoryId { get; set; }
        public string Name { get; set; }
        public bool Displayed { get; set; }
        public decimal Price { get; set; }
        public decimal BasePrice { get; set; }
        public decimal Quantity { get; set; }
        public string StrategyName { get; set; }


        public List<IFormFile> Images { get; set; }
        public List<ProductProperty> ProductProperties { get; set; }
    }
}
