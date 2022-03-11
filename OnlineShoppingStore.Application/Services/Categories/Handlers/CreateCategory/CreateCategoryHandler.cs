using MediatR;
using OnlineShoppingStore.Application.Interfaces.Context;
using OnlineShoppingStore.Domain.Entities.Products;
using System.Threading;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Application.Services.Categories.Handlers.CreateCategory
{
    public class CreateCategoryHandler : IRequestHandler<RequestCreateCategoryDto,bool>
    {
        private readonly IDataBaseContext _db;

        public CreateCategoryHandler(IDataBaseContext db)
        {
            _db = db;
        }

        public async Task<bool> Handle(RequestCreateCategoryDto request, CancellationToken cancellationToken)
        {
            Category category = new()
            {
                Name = request.Name,
                ParentCategory = GetParent(request.ParentId)
            };

            _db.Categories.Add(category);
            await _db.SaveChangesAsync();
            return true;
        }

        private Category GetParent(long? ParentId)
        {
            return _db.Categories.Find(ParentId);
        }
    }
}
