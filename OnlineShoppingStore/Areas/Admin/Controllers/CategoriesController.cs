using Microsoft.AspNetCore.Mvc;
using OnlineShoppingStore.Application.Services.Products.Commands.EditCategoryService;
using OnlineShoppingStore.Application.Services.Products.FacadDesignPattern;
using OnlineShoppingStore.Areas.Admin.Models.CategoriesViewModel;
using OnlineShoppingStore.Areas.Admin.Models.EditCategoryViewModel;
using OnlineShoppingStore.Common.ResultDto;
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
            return View(await _facad.GetCategoriesService.ExecuteGetCategories(parentId));
        }

        [HttpGet]
        public IActionResult Create(long? parentId)
        {
            ViewBag.ParentId = parentId;
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Create(CreateViewModel model)
        {
            var result = await _facad.CreateCategoryService.ExecuteCreateCategory(model.parentId, model.Name);

            var response = new ResultDto()
            {
                IsSuccess = result,
                Message = result == true ? "ثبت گروه محصول با موفقیت انجام شد." : "ثبت گروه محصول با خطا مواجه شد."
            };

            TempData["Message"] = response.Message;
            TempData["IsSuccess"] = response.IsSuccess;

            return View(model);
        }

        [HttpPost]
        public async Task<IActionResult> Delete(long id)
        {
            var result = await _facad.DeleteCategoryService.ExecuteDeleteCategory(id);

            var response = new ResultDto()
            {
                IsSuccess = result,
                Message = result == true ? "حذف گروه محصول با موفقیت انجام شد." : "حذف گروه محصول با خطا مواجه شد."
            };

            TempData["Message"] = response.Message;
            TempData["IsSuccess"] = response.IsSuccess;

            return Ok(result);
        }

        [HttpGet]
        public async Task<IActionResult> Edit(long id)
        {
            var cat = await _facad.GetGetCategoryById.ExecuteGetCategoryById(id);
            var model = new EditViewModel
            {
                Id = id,
                Name = cat.Name,
            };
            return View(model);
        }

        [HttpPost]
        public async Task<IActionResult> Edit(EditViewModel model)
        {
            var result =await _facad.EditCategoryService.ExecuteEditCategory(new RequestEditCategoryDto
            {
                Id = model.Id,
                Name = model.Name,
            });
            var response = new ResultDto()
            {
                IsSuccess = result,
                Message = result == true ? "ویرایش گروه محصول با موفقیت انجام شد." : "ویرایش گروه محصول با خطا مواجه شد."
            };

            TempData["Message"] = response.Message;
            TempData["IsSuccess"] = response.IsSuccess;

            return View(model);
        }
    }
}
