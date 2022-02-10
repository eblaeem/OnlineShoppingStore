using OnlineShoppingStore.Application.Interfaces.Context;
using OnlineShoppingStore.Common.ResultDto;
using System;

namespace OnlineShoppingStore.Application.Services.Products.Commands.EditCategoryService
{
    public class EditCategoryService : IEditCategoryService
    {
        private readonly IDataBaseContext _db;

        public EditCategoryService(IDataBaseContext db)
        {
            _db = db;
        }

        public ResultDto ExecuteEditCategory(RequestEditCategoryDto requestEditCategoryDto)
        {
            try
            {
                var cat = _db.Categories.Find(requestEditCategoryDto.Id);
                if (cat == null)
                {
                    return new ResultDto
                    {
                        IsSuccess = false,
                        Message = "چنین گروه محصولی یافت نشد."
                    };
                }
                cat.UpdateTime = DateTime.Now;
                cat.Name = requestEditCategoryDto.Name;
                _db.SaveChanges();
                return new ResultDto
                {
                    IsSuccess = true,
                    Message = "گروه محصول با موفقیت ویرایش شد"
                };
            }
            catch (Exception)
            {
                return new ResultDto
                {
                    IsSuccess = false,
                    Message = "ویرایش گروه محصول با خطا مواجه شد."
                };
            }
        }
    }
}
