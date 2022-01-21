using OnlineShoppingStore.Application.Interfaces.Context;
using OnlineShoppingStore.Application.Services.DashboardInfo.Queries.Categories;
using OnlineShoppingStore.Application.Services.Products.Commands.DeleteCategoryService;
using OnlineShoppingStore.Application.Services.Products.Commands.EditCategoryService;
using OnlineShoppingStore.Application.Services.Products.Queries.GetCategories;
using OnlineShoppingStore.Application.Services.Products.Queries.GetCategoryByIdService;

namespace OnlineShoppingStore.Application.Services.Products.FacadDesignPattern
{
    public class FacadDesignPattern : IFacadDesignPattern
    {
        private readonly IDataBaseContext _db;

        public FacadDesignPattern(IDataBaseContext db)
        {
            _db = db;
        }

        private GetCategoryById _getCategoryById;
        private CreateCategoryService _createCategorytService;
        private GetCategoriesService _getCategoriesService;
        private DeleteCategoryService _deleteCategoryService;
        private EditCategoryService _editCategoryService;
        private GetCategoriesCount _categoriesCount;

        public CreateCategoryService CreateCategoryService
        {
            get { return _createCategorytService ??= new CreateCategoryService(_db); }
        }

        public GetCategoriesService GetCategoriesService
        {
            get { return _getCategoriesService ??= new GetCategoriesService(_db); }
        }

        public DeleteCategoryService DeleteCategoryService
        {
            get { return _deleteCategoryService ??= new DeleteCategoryService(_db); }
        }

        public EditCategoryService EditCategoryService
        {
            get { return _editCategoryService ??= new EditCategoryService(_db); }
        }

        public GetCategoryById GetGetCategoryById
        {
            get { return _getCategoryById ??= new GetCategoryById(_db); }
        }

        public GetCategoriesCount GetCategoriesCount
        {
            get { return _categoriesCount ??= new GetCategoriesCount(_db); }
        }
    }
}
