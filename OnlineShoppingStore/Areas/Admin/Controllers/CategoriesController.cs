using Microsoft.AspNetCore.Mvc;
using OnlineShoppingStore.Application.Services.Products.Commands.EditCategoryService;
using OnlineShoppingStore.Application.Services.Products.FacadDesignPattern;
using OnlineShoppingStore.Areas.Admin.Models.CategoriesViewModel;
using OnlineShoppingStore.Areas.Admin.Models.EditCategoryViewModel;
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
        public async Task<IActionResult> Create(long? parentId)
        {
            ViewBag.ParentId = parentId;
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Create(CreateViewModel model)
        {
            var result = _facad.CreateCategoryService.ExecuteCreateCategory(model.parentId, model.Name);

            TempData["Message"] = result.Message;
            TempData["IsSuccess"] = result.IsSuccess;

            return View(model);
        }

        [HttpPost]
        public IActionResult Delete(long id)
        {
            return Json(_facad.DeleteCategoryService.ExecuteDeleteCategory(id));
        }

        [HttpGet]
        public async Task<IActionResult> Edit(long id)
        {
            var cat = _facad.GetGetCategoryById.ExecuteGetCategoryById(id);
            var model = new EditViewModel
            {
                Id = id,
                Name = cat.Result.Name,
            };
            return View(model);
        }

        [HttpPost]
        public async Task<IActionResult> Edit(EditViewModel model)
        {
            var result = _facad.EditCategoryService.ExecuteEditCategory(new RequestEditCategoryDto
            {
                Id = model.Id,
                Name = model.Name,
            });

            TempData["Message"] = result.Message;
            TempData["IsSuccess"] = result.IsSuccess;

            return View(model);
        }
    }
}
