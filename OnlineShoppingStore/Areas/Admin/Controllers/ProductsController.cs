using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using OnlineShoppingStore.Application.Services.Products.Commands.Products;
using OnlineShoppingStore.Application.Services.Products.Queries.GetAllCategoriesService;
using OnlineShoppingStore.Application.Services.Products.Queries.GetAllProductService;
using OnlineShoppingStore.Application.Services.Products.Queries.GetAllPropertiesService;
using OnlineShoppingStore.Common.ResultDto;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class ProductsController : Controller
    {
        private readonly IMediator _mediator;

        public ProductsController(IMediator mediator)
        {
            _mediator = mediator;
        }
        public async Task<IActionResult> Index()
        {
            var result = await _mediator.Send(RequestGetAllProductsDto.Instance);
            return View(result);
        }

        [HttpGet]
        public async Task<IActionResult> Create()
        {
            ViewBag.GetAllCat = new SelectList(await _mediator.Send(RequestGetAllCategoriesDto.Instance), "Id", "Name");
            ViewBag.GetAllProp = await _mediator.Send(RequestGetAllPropertiesDto.Instance);
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Create(RequestCreateProductDto model)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }

            List<IFormFile> images = new();
            for (int i = 0; i < Request.Form.Files.Count; i++)
            {
                var file = Request.Form.Files[i];
                images.Add(file);
            }
            model.Images = images;

            var result = await _mediator.Send(new RequestCreateProductDto
            {
                BasePrice = model.BasePrice,
                CategoryId = model.CategoryId,
                Displayed = model.Displayed,
                Name = model.Name,
                Quantity = model.Quantity,
                ProductProperties = model.ProductProperties,
                Images = images
            });

            var response = new ApiResult()
            {
                IsSuccess = result,
                Message = result == true ? "ثبت محصول با موفقیت انجام شد." : "ثبت محصول با خطا انجام شد."
            };

            return Ok(response);
        }
    }
}
