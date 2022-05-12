using MediatR;

namespace OnlineShoppingStore.Application.SiteServices.Cart.Handlers.MinusInCart
{
    public class RequestMinusInCart : IRequest<bool>
    {
        public long CartItemId { get; set; }
    }
}