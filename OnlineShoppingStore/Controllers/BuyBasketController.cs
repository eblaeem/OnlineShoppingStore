using MediatR;
using Microsoft.AspNetCore.Mvc;
using OnlineShoppingStore.Application.SiteServices.Cart.Handlers.AddToCart;
using OnlineShoppingStore.Application.SiteServices.Cart.Handlers.MinusInCart;
using OnlineShoppingStore.Application.SiteServices.Cart.Handlers.PlusInCart;
using OnlineShoppingStore.Application.SiteServices.Cart.Handlers.RemoveFromCart;
using OnlineShoppingStore.Application.SiteServices.Cart.Queries.GetCart;
using OnlineShoppingStore.Utilities;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Controllers
{
    public class BuyBasketController : Controller
    {
        private readonly IMediator _mediator;
        private readonly CookiesManeger cookiesManeger; 

        public BuyBasketController(IMediator mediator)
        {
            _mediator = mediator;
            cookiesManeger = new();
        }

        public async Task<IActionResult> Index()
        {
            var result =await _mediator.Send(new RequestGetCart
            {
                BrowserId = cookiesManeger.GetBrowserToken(HttpContext)
            });
            return View(result);
        }

        public async Task<IActionResult> AddToBuyBasket(long productId)
        {
            await _mediator.Send(new RequestAddToCart()
            {
                BrowserId = cookiesManeger.GetBrowserToken(HttpContext),
                ProductId = productId
            });
            return RedirectToAction("Index");
        }

        public async Task<IActionResult> RemoveFromBasket(long productId)
        {
           await _mediator.Send(new RequestRemoveFromCart
            {
                ProductId = productId,
                BrowserId = cookiesManeger.GetBrowserToken(HttpContext)
            });
            return RedirectToAction("Index");
        }

        public async Task<IActionResult> Plus(long cartItemId)
        {
            await _mediator.Send(new RequestPlusInCart
            {
                CartItemId = cartItemId,
                //BrowserId = cookiesManeger.GetBrowserToken(context)
            });
            return RedirectToAction("Index");
        }

        public async Task<IActionResult> Minus(long cartItemId)
        {
            await _mediator.Send(new RequestMinusInCart
            {
                CartItemId = cartItemId,
                //BrowserId = cookiesManeger.GetBrowserToken(context)
            });
            return RedirectToAction("Index");
        }
    }
}
