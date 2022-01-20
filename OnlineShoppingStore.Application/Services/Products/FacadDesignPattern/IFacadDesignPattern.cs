using OnlineShoppingStore.Application.Services.Products.Commands.DeleteCategoryService;
using OnlineShoppingStore.Application.Services.Products.Queries.GetCategories;

namespace OnlineShoppingStore.Application.Services.Products.FacadDesignPattern
{
    public interface IFacadDesignPattern
    {
        AddNewCategoryService AddNewCategoryService { get; }
        GetCategoriesService GetCategoriesService { get; }
        DeleteCategoryService DeleteCategoryService { get; }
    }
}
