using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using OnlineShoppingStore.Application.Services.Products.Commands.Products;
using OnlineShoppingStore.Application.Services.Products.FacadDesignPattern;
using OnlineShoppingStore.Areas.Admin.Models.CreateProductViewModel;
using OnlineShoppingStore.Domain.Entities.Products;
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
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public async Task<IActionResult> Create()
        {
            ViewBag.GetAllCat = new SelectList(_facad.GetAllCategoriesService.ExecuteGetAllCategories().Result, "Id", "Name");
            return View();
        }

        [HttpPost]
        public IActionResult Create(RequestAddNewProdductDto request)
        {
            List<IFormFile> images = new();
            for (int i = 0; i < Request.Form.Files.Count; i++)
            {
                var file = Request.Form.Files[i];
                images.Add(file);
            }
            request.Images = images;
            return Json(_facad.AddNewProduct.ExecuteAddNewProduct(request));
        }
    }
}
