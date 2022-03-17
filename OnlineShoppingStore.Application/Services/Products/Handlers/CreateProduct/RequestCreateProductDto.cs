using MediatR;
using Microsoft.AspNetCore.Http;
using OnlineShoppingStore.Domain.Entities.Products;
using System.Collections.Generic;

namespace OnlineShoppingStore.Application.Services.Products.Handlers.CreateProduct
{
    public class RequestCreateProductDto : IRequest<bool>
    {
        public long CategoryId { get; set; }
        public string Name { get; set; }
        public bool Displayed { get; set; }
        public decimal BasePrice { get; set; }
        public decimal Quantity { get; set; }


        public List<IFormFile> Images { get; set; }
        //public RequestPropertyDto PropertyDto { get; set; }
        public List<ProductProperty> ProductProperties { get; set; }

    }
    //public class RequestPropertyDto
    //{
    //    public long PropertyId { get; set; }
    //    public string PropertyName { get; set; }
        
    //}


}
