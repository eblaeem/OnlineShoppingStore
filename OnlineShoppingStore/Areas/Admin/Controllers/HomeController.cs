using MediatR;
using Microsoft.AspNetCore.Mvc;
using OnlineShoppingStore.Application.AdminServices.HomePage.Handlers.ChangeVisibility;
using OnlineShoppingStore.Application.AdminServices.HomePage.Handlers.CreateSlider;
using OnlineShoppingStore.Application.AdminServices.HomePage.Handlers.DeleteImageFromSlider;
using OnlineShoppingStore.Application.AdminServices.HomePage.Queries.GetPicsForSliderAndBannersInAdmin;
using OnlineShoppingStore.Areas.Admin.Models.Home;
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
            var result = await _mediator.Send(new RequestGetPicsForSliderAndBannersInAdmin());
            return View(result);
        }

        public IActionResult CreateSlider()
        {
            var model = new CreateSliderAndBanner();
            return View(model);
        }

        [HttpPost]
        public async Task<IActionResult> CreateSlider(CreateSliderAndBanner model)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }

            var result = await _mediator.Send(new RequestCreateSlider
            {
                File = model.File,
                Link = model.Link,
                Title= model.Title,
                PreTitle = model.PreTitle,
                Paragraph = model.Paragraph,
                LocationEnum = model.LocationEnum
            });
            
            var response = new ApiResult()
            {
                IsSuccess = result,
                Message = result == true ? "ثبت تصویر در اسلایدر با موفقیت انجام شد." : "ثبت تصویر در اسلایدر با خطا مواجه شد."
            };
            TempData["IsSuccess"] = response.IsSuccess;
            TempData["Message"] = response.Message;

            return View(model);
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

        [HttpPost]
        public async Task<IActionResult> ChangeImageVisibility(long id)
        {
            var result = await _mediator.Send(new RequestChangeVisibility
            {
                Id = id
            });

            var response = new ApiResult()
            {
                IsSuccess = result,
                Message = result == true ? "وضعیت نمایش تصویر با موفقیت تغییر کرد." : "وضعیت نمایش تصویر با خطا مواجه شد."
            };
            return Ok(response);
        }
    }
}
