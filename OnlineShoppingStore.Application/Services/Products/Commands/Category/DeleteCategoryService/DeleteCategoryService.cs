using OnlineShoppingStore.Application.Interfaces.Context;
using OnlineShoppingStore.Common.ResultDto;
using System;

namespace OnlineShoppingStore.Application.Services.Products.Commands.DeleteCategoryService
{
    public class DeleteCategoryService : IDeleteCategoryService
    {
        private readonly IDataBaseContext _db;

        public DeleteCategoryService(IDataBaseContext db)
        {
            _db = db;
        }
        public ResultDto ExecuteDeleteCategory(long id)
        {
            var cat = _db.Categories.Find(id);
            if (cat == null)
            {
                return new ResultDto
                {
                    IsSuccess = false,
                    Message = "چنین گروه محصولی یافت نشد."
                };
            }
            cat.DeletedTime = DateTime.Now;
            cat.IsDeleted = true;
            _db.SaveChanges();
            return new ResultDto
            {
                IsSuccess = true,
                Message = "گروه محصول با موفقیت حذف شد"
            };
        }
    }
}
