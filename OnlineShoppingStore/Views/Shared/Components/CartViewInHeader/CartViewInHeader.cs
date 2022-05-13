using MediatR;
using Microsoft.AspNetCore.Mvc;
using OnlineShoppingStore.Application.SiteServices.Cart.Queries.GetCart;
using OnlineShoppingStore.Utilities;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Views.Shared.Components.CartViewInHeader
{
    public class CartViewInHeader : ViewComponent
    {
        private readonly IMediator _mediator;
        private readonly CookiesManeger _cookiesManeger;

        public CartViewInHeader(IMediator mediator)
        {
            _mediator = mediator;
            _cookiesManeger = new CookiesManeger();
        }

        public async Task<IViewComponentResult> InvokeAsync()
        {
            var userId = ClaimUtilities.GetUSerId(HttpContext.User);
            var cartView = await _mediator.Send(new RequestGetCart
            {
                BrowserId = _cookiesManeger.GetBrowserToken(HttpContext),
                UserId = userId,
            });

            return View(cartView);
        }
    }
}
