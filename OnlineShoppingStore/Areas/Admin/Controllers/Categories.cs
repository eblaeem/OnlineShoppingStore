using Microsoft.AspNetCore.Mvc;
using OnlineShoppingStore.Application.Services.Products.FacadDesignPattern;
using OnlineShoppingStore.Areas.Admin.Models.CategoriesViewModel;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class Categories : Controller
    {
        private readonly IFacadDesignPattern _facad;

        public Categories(IFacadDesignPattern facad)
        {
            _facad = facad;
        }

        public async Task<IActionResult> Index(long? paranretId)
        {
            return View(_facad.GetCategoriesService.ExecuteIGetCategoriesService(paranretId).Result);
        }

        [HttpGet]
        public async Task<IActionResult> AddNewCategory(long? parentId)
        {
            ViewBag.ParentId = parentId;
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> AddNewCategory(AddNewCategoryViewModel model)
        {
            var result =_facad.AddNewProductService.ExecuteAddNewProduct(model.parentId, model.name);
            return View(result);
        }

    }
}
