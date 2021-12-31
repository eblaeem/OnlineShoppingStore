using OnlineShoppingStore.Application.Interfaces.Context;
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

        private AddNewProductSerive _addNewProductService;
        private GetCategoriesService _getCategoriesService;

        public AddNewProductSerive AddNewProductService
        {
            get { return _addNewProductService ??= new AddNewProductSerive(_db); }
        }

        public GetCategoriesService GetCategoriesService
        {
            get { return _getCategoriesService ??= new GetCategoriesService(_db); }
        }
    }
}
