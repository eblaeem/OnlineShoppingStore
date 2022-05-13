using System.Collections.Generic;

namespace OnlineShoppingStore.Application.SiteServices.Cart.Queries.GetCart
{
    public class ResponseGetCart
    {
        public decimal ProductCount { get; set; }
        public decimal TotalAmout { get; set; }
        public List<CartItemDto> CartItemDtos { get; set; }
    }
}
