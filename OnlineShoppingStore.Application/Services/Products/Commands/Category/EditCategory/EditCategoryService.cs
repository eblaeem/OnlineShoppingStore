using OnlineShoppingStore.Application.Interfaces.Context;
using System;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Application.Services.Products.Commands.EditCategoryService
{
    public class EditCategoryService : IEditCategoryService
    {
        private readonly IDataBaseContext _db;

        public EditCategoryService(IDataBaseContext db)
        {
            _db = db;
        }

        public async Task<bool> ExecuteEditCategory(RequestEditCategoryDto requestEditCategoryDto)
        {
            var cat =await _db.Categories.FindAsync(requestEditCategoryDto.Id);
            if (cat == null)
            {
                throw new Exception("");
            }
            cat.UpdateTime = DateTime.Now;
            cat.Name = requestEditCategoryDto.Name;
            await _db.SaveChangesAsync();
            return true;
        }
    }
}
