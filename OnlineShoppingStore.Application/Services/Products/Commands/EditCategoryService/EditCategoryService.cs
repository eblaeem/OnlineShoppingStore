using OnlineShoppingStore.Application.Interfaces.Context;
using OnlineShoppingStore.Common.ResultDto;
using System;

namespace OnlineShoppingStore.Application.Services.Products.Commands.EditCategoryService
{
    public partial class EditCategoryService : IEditCategoryService
    {
        private readonly IDataBaseContext _db;

        public EditCategoryService(IDataBaseContext db)
        {
            _db = db;
        }

        public ResultDto ExecuteEditCategory(RequestEditDto requestEditDto)
        {
            try
            {
                var cat = _db.Categories.Find(requestEditDto.Id);
                if (cat == null)
                {
                    return new ResultDto
                    {
                        IsSuccess = false,
                        Message = "چنین گروه محصولی یافت نشد."
                    };
                }
                cat.UpdateTime = DateTime.Now;
                cat.Name = requestEditDto.Name;
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
