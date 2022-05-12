using MediatR;
using System;

namespace OnlineShoppingStore.Application.SiteServices.Cart.Handlers.RemoveFromCart
{
    public class RequestRemoveFromCart : IRequest<bool>
    {
        public long ProductId { get; set; }
        public Guid BrowserId { get; set; }
    }
}
