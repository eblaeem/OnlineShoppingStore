using MediatR;
using Microsoft.AspNetCore.Mvc;
using OnlineShoppingStore.Application.Services.Products;
using OnlineShoppingStore.Application.Services.Products.Commands.DeleteCategoryService;
using OnlineShoppingStore.Application.Services.Products.Commands.EditCategoryService;
using OnlineShoppingStore.Application.Services.Products.Queries.GetCategories;
using OnlineShoppingStore.Application.Services.Products.Queries.GetCategoryByIdService;
using OnlineShoppingStore.Areas.Admin.Models.CategoriesViewModel;
using OnlineShoppingStore.Areas.Admin.Models.EditCategoryViewModel;
using OnlineShoppingStore.Common.ResultDto;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class CategoriesController : Controller
    {
        private readonly IMediator _mediator;

        public CategoriesController(IMediator mediator)
        {
            _mediator = mediator;
        }

        public async Task<IActionResult> Index(long? parentId)
        {
            var result = await _mediator.Send(new RequestGetCategoryDto { ParentId = parentId });
            return Ok(result);
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
            var result = await _mediator.Send(new RequestCreateCategoryDto
            {
                Name = model.Name,
                ParentId = model.parentId
            });

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
            var result = await _mediator.Send(new RequestDeleteCategoryDto { Id = id});
            
            var response = new ResultDto()
            {
                IsSuccess = result,
                Message = result == true ? "حذف گروه محصول با موفقیت انجام شد." : "حذف گروه محصول با خطا مواجه شد."
            };

            return Ok(response);
        }

        [HttpGet]
        public async Task<IActionResult> Edit(long id)
        {
            var category = await _mediator.Send(new RequestGetCategoryByIdDto
            {
                Id = id
            });

            var model = new EditViewModel
            {
                Id = id,
                Name = category.Name,
            };
            return View(model);
        }

        [HttpPost]
        public async Task<IActionResult> Edit(EditViewModel model)
        {
            var result = await _mediator.Send(new RequestEditCategoryDto
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
