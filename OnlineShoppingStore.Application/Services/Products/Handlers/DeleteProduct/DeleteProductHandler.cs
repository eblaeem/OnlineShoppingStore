using MediatR;
using OnlineShoppingStore.Application.Interfaces.Context;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Application.Services.Products.Handlers.DeleteProduct
{
    public class DeleteProductHandler : IRequestHandler<RequestDeleteProductHandler, bool>
    {
        private readonly IDataBaseContext _db;

        public DeleteProductHandler(IDataBaseContext db)
        {
            _db = db;
        }
        public async Task<bool> Handle(RequestDeleteProductHandler request, CancellationToken cancellationToken)
        {
            var product = await _db.Products.FindAsync(request.ProductId);
            if (product == null)
            {
                return false;
            }
            product.IsDeleted = true;
            product.DeletedTime = DateTime.Now;
            _db.SaveChanges();
            return true;
        }
    }
}
