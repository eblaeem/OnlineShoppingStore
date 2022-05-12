using MediatR;
using Microsoft.EntityFrameworkCore;
using OnlineShoppingStore.Application.Interfaces.Context;
using OnlineShoppingStore.Domain.Entities.Cart;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Application.SiteServices.Cart.Handlers.AddToCart
{
    public class AddToCartHandler : IRequestHandler<RequestAddToCart, bool>
    {
        private readonly IDataBaseContext _db;

        public AddToCartHandler(IDataBaseContext db)
        {
            _db = db;
        }
        public async Task<bool> Handle(RequestAddToCart request, CancellationToken cancellationToken)
        {
           var cart =await _db.ShoppingCarts
                .Where(p=>p.BrowserToken == request.BrowserId && p.Finished == false)
                
                .FirstOrDefaultAsync();
            if (cart == null)
            {
                ShoppingCart newCart = new()
                {
                    BrowserToken = request.BrowserId,
                    Finished = false,
                };
                _db.ShoppingCarts.Add(newCart);
                _db.SaveChanges(); 
                cart = newCart;
            }
            var product =await _db.Products.FindAsync(request.ProductId);

            var deletedCartItem =await _db.CartItems
                .Where(p => p.ProductId == request.ProductId)
                .FirstOrDefaultAsync();

            if (deletedCartItem != null)
            {
                deletedCartItem.IsDeleted = false;
                deletedCartItem.Count = 1;
                _db.SaveChanges();
            }

            var cartItem =await _db.CartItems
                .Where(p => p.ProductId == request.ProductId && p.ShoppingCartId == cart.Id)
                .FirstOrDefaultAsync();

            if (cartItem != null)
            {
                cartItem.Count++;
            }
            else
            {
                CartItem newCartItem = new()
                {
                    ShoppingCart = cart,
                    Count = 1,
                    Price = product.BasePrice,
                    Product = product
                };
                _db.CartItems.Add(newCartItem);
                _db.SaveChanges();
            }
            return true;
        }
    }
}
