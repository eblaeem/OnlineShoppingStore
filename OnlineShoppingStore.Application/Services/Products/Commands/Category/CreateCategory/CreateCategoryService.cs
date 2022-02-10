using OnlineShoppingStore.Application.Interfaces.Context;
using OnlineShoppingStore.Common.ResultDto;
using OnlineShoppingStore.Domain.Entities.Products;

namespace OnlineShoppingStore.Application.Services.Products
{
    public class CreateCategoryService : ICreateCategoryService
    {
        private readonly IDataBaseContext _db;

        public CreateCategoryService(IDataBaseContext db)
        {
            _db = db;
        }
        public ResultDto ExecuteCreateCategory(long? ParentId, string Name)
        {
            try
            {
                if (string.IsNullOrEmpty(Name))
                {
                    return new ResultDto()
                    {
                        IsSuccess = false,
                        Message = "نام گروه محصول را وارد نمایید",
                    };
                }
                Category category = new()
                {
                    Name = Name,
                    ParentCategory = GetParent(ParentId)
                };

                _db.Categories.Add(category);
                _db.SaveChanges();
                return new ResultDto()
                {
                    IsSuccess = true,
                    Message = "گروه محصول با موفقیت اضافه شد",
                };
            }
            catch (System.Exception)
            {
                return new ResultDto()
                {
                    IsSuccess = false,
                    Message = "در افزدون گروه محصول خطایی رخ داده است."
                };
            }
        }

        private Category GetParent(long? ParentId)
        {
            return _db.Categories.Find(ParentId);
        }
    }
}
