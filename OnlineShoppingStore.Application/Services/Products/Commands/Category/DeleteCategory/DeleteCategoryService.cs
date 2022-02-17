using OnlineShoppingStore.Application.Interfaces.Context;
using System;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Application.Services.Products.Commands.DeleteCategoryService
{
    public class DeleteCategoryService : IDeleteCategoryService
    {
        private readonly IDataBaseContext _db;

        public DeleteCategoryService(IDataBaseContext db)
        {
            _db = db;
        }
        public async Task<bool> ExecuteDeleteCategory(long id)
        {
            var cat =await _db.Categories.FindAsync(id);
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
