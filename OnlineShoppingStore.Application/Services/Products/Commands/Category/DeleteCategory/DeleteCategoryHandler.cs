using MediatR;
using OnlineShoppingStore.Application.Interfaces.Context;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Application.Services.Products.Commands.DeleteCategoryService
{
    public class DeleteCategoryHandler : IRequestHandler<RequestDeleteCategoryDto,bool>
    {
        private readonly IDataBaseContext _db;

        public DeleteCategoryHandler(IDataBaseContext db)
        {
            _db = db;
        }

        public async Task<bool> Handle(RequestDeleteCategoryDto request, CancellationToken cancellationToken)
        {
            var cat = await _db.Categories.FindAsync(request.Id,cancellationToken);
            if (cat == null)
            {
                return false;
            }
            cat.DeletedTime = DateTime.Now;
            cat.IsDeleted = true;
            _db.SaveChanges();
            return true;
        }
    }
}
