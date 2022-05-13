using MediatR;
using Microsoft.EntityFrameworkCore;
using OnlineShoppingStore.Application.Interfaces.Context;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Application.SiteServices.Cart.Queries.GetCart
{
    public class GetCartQuery : IRequestHandler<RequestGetCart, ResponseGetCart>
    {
        private readonly IDataBaseContext _db;

        public GetCartQuery(IDataBaseContext db)
        {
            _db = db;
        }
        public async Task<ResponseGetCart> Handle(RequestGetCart request, CancellationToken cancellationToken)
        {
            var cart = await _db.ShoppingCarts
                .Include(p => p.CartItems.Where(p => p.IsDeleted != true))
                .ThenInclude(p => p.Product)
                .ThenInclude(p => p.Images)
                .Where(p => p.BrowserToken == request.BrowserId && p.Finished == false)
                .OrderByDescending(p => p.Id)
                .FirstOrDefaultAsync();

            /*تعیین سبد خرید که برای کدام یوزر می باشد*/
            if (request.UserId != null)
            {   
                var user =await _db.Users.FindAsync(request.UserId);
                cart.User = user;
                _db.SaveChanges();
            }

            return new ResponseGetCart()
            {   ProductCount = cart.CartItems.Count,
                TotalAmout = cart.CartItems.Sum(p=>p.Price * p.Count), 
                CartItemDtos = cart.CartItems.Select(p => new CartItemDto
                {
                    Count = p.Count,
                    ProductId = p.ProductId,
                    Price = p.Price,
                    ProductName = p.Product.Name,
                    Id = p.Id,
                    ImageSrc = p.Product?.Images?.FirstOrDefault()?.Src?? ""
                }).ToList()
            };
        }
    }
}
