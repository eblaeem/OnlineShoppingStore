using MediatR;
using OnlineShoppingStore.Application.Interfaces.Context;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Application.Services.Products.Commands.EditCategoryService
{
    public class EditCategoryHandler : IRequestHandler<RequestEditCategoryDto,bool>
    {
        private readonly IDataBaseContext _db;

        public EditCategoryHandler(IDataBaseContext db)
        {
            _db = db;
        }

        public async Task<bool> Handle(RequestEditCategoryDto request, CancellationToken cancellationToken)
        {
            var cat = await _db.Categories.FindAsync(request.Id);
            if (cat == null)
            {
                throw new Exception("");
            }
            cat.UpdateTime = DateTime.Now;
            cat.Name = request.Name;
            await _db.SaveChangesAsync();
            return true;
        }
    }
}
