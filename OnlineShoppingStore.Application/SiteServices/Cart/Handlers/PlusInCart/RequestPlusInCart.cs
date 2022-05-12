using MediatR;

namespace OnlineShoppingStore.Application.SiteServices.Cart.Handlers.PlusInCart
{
    public class RequestPlusInCart : IRequest<bool>
    {
        public long CartItemId { get; set; }
    }
}
