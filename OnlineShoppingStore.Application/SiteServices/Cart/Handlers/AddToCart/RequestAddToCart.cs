using MediatR;
using System;

namespace OnlineShoppingStore.Application.SiteServices.Cart.Handlers.AddToCart
{
    public class RequestAddToCart : IRequest<bool>
    {
        public long ProductId { get; set; }
        public Guid BrowserId { get; set; }
    }
}
