using MediatR;
using OnlineShoppingStore.Application.Interfaces.Context;
using System.Threading;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Application.SiteServices.Cart.Handlers.PlusInCart
{
    public class PlusInCartHandler : IRequestHandler<RequestPlusInCart, bool>
    {
        private readonly IDataBaseContext _db;

        public PlusInCartHandler(IDataBaseContext db)
        {
            _db = db;
        }
        public async Task<bool> Handle(RequestPlusInCart request, CancellationToken cancellationToken)
        {
           var cartItem =await _db.CartItems.FindAsync(request.CartItemId);
            if(cartItem == null)
            {
                return false;
            }
            cartItem.Count ++;
            _db.SaveChanges();
            return true;
        }
    }
}
