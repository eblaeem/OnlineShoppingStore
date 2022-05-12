using MediatR;
using OnlineShoppingStore.Application.Interfaces.Context;
using System.Threading;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Application.SiteServices.Cart.Handlers.MinusInCart
{
    public class MinusInCartHandler : IRequestHandler<RequestMinusInCart, bool>
    {
        private readonly IDataBaseContext _db;
        public MinusInCartHandler(IDataBaseContext db)
        {
            _db = db;
        }
        public async Task<bool> Handle(RequestMinusInCart request, CancellationToken cancellationToken)
        {
            var cartItem = await _db.CartItems.FindAsync(request.CartItemId);
            if (cartItem == null || cartItem.Count <= 1)
            {
                return false;
            }
            cartItem.Count--;
            _db.SaveChanges();
            return true;
        }
    }
}
