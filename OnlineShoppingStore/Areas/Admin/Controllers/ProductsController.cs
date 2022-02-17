using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using OnlineShoppingStore.Application.Services.Products.Commands.Products;
using OnlineShoppingStore.Application.Services.Products.FacadDesignPattern;
using OnlineShoppingStore.Common.ResultDto;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class ProductsController : Controller
    {
        private readonly IFacadDesignPattern _facad;

        public ProductsController(IFacadDesignPattern facad)
        {
            _facad = facad;
        }
        public async Task<IActionResult> Index()
        {
            var model =await _facad.GetAllProductService.Execute();
            return View(model);
        }

        [HttpGet]
        public async Task<IActionResult> Create()
        {
            ViewBag.GetAllCat = new SelectList(await _facad.GetAllCategoriesService.Execute(), "Id", "Name");
            ViewBag.GetAllProp =await _facad.GetAllPropertiesService.Execute();
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Create(RequestCreateProductDto request)
        {
            List<IFormFile> images = new();
            for (int i = 0; i < Request.Form.Files.Count; i++)
            {
                var file = Request.Form.Files[i];
                images.Add(file);
            }
            request.Images = images;

            var result = await _facad.AddNewProduct.Execute(request);

            var response = new ResultDto()
            {
                IsSuccess = result,
                Message = result == true ? "ثبت محصول با موفقیت انجام شد." : "ثبت محصول با خطا انجام شد."
            };

            return Ok(response);
        }
    }
}
