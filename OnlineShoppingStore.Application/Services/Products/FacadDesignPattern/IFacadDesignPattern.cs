using OnlineShoppingStore.Application.Services.Products.Queries.GetCategories;

namespace OnlineShoppingStore.Application.Services.Products.FacadDesignPattern
{
    public interface IFacadDesignPattern
    {
        AddNewProductSerive AddNewProductService { get; }
        GetCategoriesService GetCategoriesService { get; }
    }
}
