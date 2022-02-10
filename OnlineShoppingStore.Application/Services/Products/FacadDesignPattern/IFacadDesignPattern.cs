using OnlineShoppingStore.Application.Services.DashboardInfo.Queries.Categories;
using OnlineShoppingStore.Application.Services.Products.Commands.DeleteCategoryService;
using OnlineShoppingStore.Application.Services.Products.Commands.EditCategoryService;
using OnlineShoppingStore.Application.Services.Products.Commands.Products;
using OnlineShoppingStore.Application.Services.Products.Queries.GetAllCategoriesService;
using OnlineShoppingStore.Application.Services.Products.Queries.GetAllProductService;
using OnlineShoppingStore.Application.Services.Products.Queries.GetAllPropertiesService;
using OnlineShoppingStore.Application.Services.Products.Queries.GetCategories;
using OnlineShoppingStore.Application.Services.Products.Queries.GetCategoryByIdService;

namespace OnlineShoppingStore.Application.Services.Products.FacadDesignPattern
{
    public interface IFacadDesignPattern
    {
        GetCategoryById GetGetCategoryById { get; }
        GetCategoriesCountService GetCategoriesCount { get; }
        CreateCategoryService CreateCategoryService { get; }
        GetCategoriesService GetCategoriesService { get; }
        DeleteCategoryService DeleteCategoryService { get; }
        EditCategoryService EditCategoryService { get; }
        AddNewProduct AddNewProduct { get; }
        GetAllCategoriesService GetAllCategoriesService { get; }
        GetAllProductService GetAllProductService { get; }
        GetAllPropertiesService GetAllPropertiesService { get; }
    }
}
