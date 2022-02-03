using Microsoft.AspNetCore.Hosting;
using OnlineShoppingStore.Application.Interfaces.Context;
using OnlineShoppingStore.Application.Services.DashboardInfo.Queries.Categories;
using OnlineShoppingStore.Application.Services.Products.Commands.DeleteCategoryService;
using OnlineShoppingStore.Application.Services.Products.Commands.EditCategoryService;
using OnlineShoppingStore.Application.Services.Products.Commands.Products;
using OnlineShoppingStore.Application.Services.Products.Queries.GetAllCategoriesService;
using OnlineShoppingStore.Application.Services.Products.Queries.GetAllProductService;
using OnlineShoppingStore.Application.Services.Products.Queries.GetCategories;
using OnlineShoppingStore.Application.Services.Products.Queries.GetCategoryByIdService;

namespace OnlineShoppingStore.Application.Services.Products.FacadDesignPattern
{
    public class FacadDesignPattern : IFacadDesignPattern
    {
        private readonly IDataBaseContext _db;
        private readonly IHostingEnvironment _environment;

        public FacadDesignPattern(IDataBaseContext db, IHostingEnvironment environment)
        {
            _db = db;
            _environment = environment;
        }

        private GetCategoryById _getCategoryById;
        private CreateCategoryService _createCategorytService;
        private GetCategoriesService _getCategoriesService;
        private DeleteCategoryService _deleteCategoryService;
        private EditCategoryService _editCategoryService;
        private GetCategoriesCount _getCategoriesCount;
        private AddNewProduct _addNewProduct;
        private GetAllCategoriesService _getAllCategoriesService;
        private GetAllProductService _getAllProductService;

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
            get { return _getCategoriesCount ??= new GetCategoriesCount(_db); }
        }
        public AddNewProduct AddNewProduct
        {
            get { return _addNewProduct ?? new AddNewProduct(_db, _environment); }
        }

        public GetAllCategoriesService GetAllCategoriesService
        {
            get { return _getAllCategoriesService ?? new GetAllCategoriesService(_db); }
        }

        public GetAllProductService GetAllProductService
        {
            get { return _getAllProductService ?? new GetAllProductService(_db); }
        }
    }
}
