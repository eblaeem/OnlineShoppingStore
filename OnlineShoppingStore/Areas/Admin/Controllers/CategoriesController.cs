using Microsoft.AspNetCore.Mvc;
using OnlineShoppingStore.Application.Services.Products.FacadDesignPattern;
using OnlineShoppingStore.Areas.Admin.Models.CategoriesViewModel;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class CategoriesController : Controller
    {
        private readonly IFacadDesignPattern _facad;

        public CategoriesController(IFacadDesignPattern facad)
        {
            _facad = facad;
        }

        public async Task<IActionResult> Index(long? parentId)
        {
            return View(_facad.GetCategoriesService.ExecuteIGetCategoriesService(parentId).Result);
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
            var result =_facad.AddNewCategoryService.ExecuteAddNewProduct(model.parentId, model.name);

            TempData["Message"] = result.Message;
            TempData["IsSuccess"] = result.IsSuccess;

            return View(model);
        }

        [HttpPost]
        public async Task<IActionResult> Delete(long id)
        {
            return Json(_facad.DeleteCategoryService.ExecuteDeleteCategory(id));
        }

    }
}
