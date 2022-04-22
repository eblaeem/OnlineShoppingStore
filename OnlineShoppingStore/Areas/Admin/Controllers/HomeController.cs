using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OnlineShoppingStore.Application.AdminServices.HomePage.Handlers;
using OnlineShoppingStore.Application.AdminServices.HomePage.Handlers.CreateSlider;
using OnlineShoppingStore.Application.AdminServices.HomePage.Handlers.DeleteImageFromSlider;
using OnlineShoppingStore.Application.AdminServices.HomePage.Queries.GetAllSliders;
using OnlineShoppingStore.Areas.Admin.ViewModels.Home;
using OnlineShoppingStore.Common.ResultDto;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class HomeController : Controller
    {
        private readonly IMediator _mediator;

        public HomeController(IMediator mediator)
        {
            _mediator = mediator;
        }
        public IActionResult Dashboard()
        {
            return View();
        }
        public async Task<IActionResult> Index()
        {
            var result = await _mediator.Send(new RequestGetAllSliders());
            return View(result);
        }

        public IActionResult CreateSlider()
        {
            return View();
        }
        [HttpPost]
        public async Task<IActionResult> CreateSlider(CreateSliderViewModel model)
        {
            var result = await _mediator.Send(new RequestCreateSlider
            {
                File = model.File,
                Link = model.Link,
                Title= model.Title,
                PreTitle = model.PreTitle,
                Paragraph = model.Paragraph,
            });
            return View(result);
        }

        [HttpPost]
        public async Task<IActionResult> DeleteSlider(long id)
        {
            var result = await _mediator.Send(new RequestDeleteImageFromSlider()
            {
                SliderImageId = id
            });

            var response = new ApiResult()
            {
                IsSuccess = result,
                Message = result == true ? "حذف  با موفقیت انجام شد." : "حذف  با خطا مواجه شد."
            };

            return Ok(response);
        }
    }
}
