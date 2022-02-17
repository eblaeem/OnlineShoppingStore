using OnlineShoppingStore.Application.Interfaces.Context;
using OnlineShoppingStore.Domain.Entities.Products;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Application.Services.Products
{
    public class CreateCategoryService : ICreateCategoryService
    {
        private readonly IDataBaseContext _db;

        public CreateCategoryService(IDataBaseContext db)
        {
            _db = db;
        }
        public async Task<bool> ExecuteCreateCategory(long? ParentId, string Name)
        {
            Category category = new()
            {
                Name = Name,
                ParentCategory = GetParent(ParentId)
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
