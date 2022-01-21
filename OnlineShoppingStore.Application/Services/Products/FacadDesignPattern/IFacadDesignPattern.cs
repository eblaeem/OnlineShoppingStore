using OnlineShoppingStore.Application.Services.Products.Commands.DeleteCategoryService;
using OnlineShoppingStore.Application.Services.Products.Commands.EditCategoryService;
using OnlineShoppingStore.Application.Services.Products.Queries.GetCategories;
using OnlineShoppingStore.Application.Services.Products.Queries.GetCategoryByIdService;

namespace OnlineShoppingStore.Application.Services.Products.FacadDesignPattern
{
    public interface IFacadDesignPattern
    {
        GetCategoryById GetGetCategoryById { get; }
        CreateCategoryService CreateCategoryService { get; }
        GetCategoriesService GetCategoriesService { get; }
        DeleteCategoryService DeleteCategoryService { get; }
        EditCategoryService EditCategoryService { get; }
    }
}
