using MediatR;
using System;

namespace OnlineShoppingStore.Application.SiteServices.Cart.Queries.GetCart
{
    public class RequestGetCart : IRequest<ResponseGetCart>
    {
        public Guid BrowserId { get; set; }
    }
}
