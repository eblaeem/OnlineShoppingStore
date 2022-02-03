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
            if (string.IsNullOrEmpty(Name))
            {
                return new ResultDto()
                {
                    IsSuccess = false,
                    Message = "نام دسته بندی را وارد نمایید",
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
                Message = "دسته بندی با موفقیت اضافه شد",
            };
        }

        private Category GetParent(long? ParentId)
        {
            return _db.Categories.Find(ParentId);
        }
    }
}
