using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OnlineShoppingStore.Application.AdminServices.HomePage.Handlers;
using OnlineShoppingStore.Application.AdminServices.HomePage.Handlers.CreateSlider;
using OnlineShoppingStore.Areas.Admin.ViewModels.Home;
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
        public IActionResult Index()
        {
            return View();
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
                Pragraph = model.Pragraph,
            });
            return View(result);
        }
    }
}
