using Microsoft.AspNetCore.Mvc;
using OnlineShoppingStore.Application.Services.Products.FacadDesignPattern;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Areas.Admin.Views.Home.Components.GetCategoriesCount
{
    public class GetCategoriesCount:ViewComponent
    {
        private readonly IFacadDesignPattern _facad;

        public GetCategoriesCount(IFacadDesignPattern facad)
        {
            _facad = facad;
        }
        public async Task<IViewComponentResult> InvokeAsync()
        {
            return await Task.Run(() => View(_facad.GetCategoriesCount.ExecuteGetCategoriesCount()));
        }
    }
}
