using OnlineShoppingStore.Application.Interfaces.Context;
using OnlineShoppingStore.Application.Services.Products.Commands.DeleteCategoryService;
using OnlineShoppingStore.Application.Services.Products.Queries.GetCategories;

namespace OnlineShoppingStore.Application.Services.Products.FacadDesignPattern
{
    public class FacadDesignPattern : IFacadDesignPattern
    {
        private readonly IDataBaseContext _db;

        public FacadDesignPattern(IDataBaseContext db)
        {
            _db = db;
        }

        private AddNewCategoryService _addNewCategorytService;
        private GetCategoriesService _getCategoriesService;
        private DeleteCategoryService _deleteCategoryService;

        public AddNewCategoryService AddNewCategoryService
        {
            get { return _addNewCategorytService ??= new AddNewCategoryService(_db); }
        }

        public GetCategoriesService GetCategoriesService
        {
            get { return _getCategoriesService ??= new GetCategoriesService(_db); }
        }

        public DeleteCategoryService DeleteCategoryService
        {
            get { return _deleteCategoryService ??= new DeleteCategoryService(_db); }
        }
    }
}
