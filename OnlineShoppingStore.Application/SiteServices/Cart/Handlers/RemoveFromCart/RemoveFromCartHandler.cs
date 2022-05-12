using MediatR;
using Microsoft.EntityFrameworkCore;
using OnlineShoppingStore.Application.Interfaces.Context;
using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Application.SiteServices.Cart.Handlers.RemoveFromCart
{
    public class RemoveFromCartHandler : IRequestHandler<RequestRemoveFromCart, bool>
    {
        private readonly IDataBaseContext _db;

        public RemoveFromCartHandler(IDataBaseContext db)
        {
            _db = db;
        }
        public async Task<bool> Handle(RequestRemoveFromCart request, CancellationToken cancellationToken)
        {
            var cartItem = await _db.CartItems
                .Where(p => p.ProductId == request.ProductId)
                .FirstOrDefaultAsync();
            if (cartItem == null)
            {
                return false;
            }
            cartItem.IsDeleted = true;
            cartItem.DeletedTime = DateTime.Now;
            _db.SaveChanges();
            return true;
        }
    }
}
