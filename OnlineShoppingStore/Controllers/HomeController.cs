using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using OnlineShoppingStore.Application.AdminServices.HomePage.Queries.GetPicsForSliderAndBannersInAdmin;
using OnlineShoppingStore.Application.SiteServices.HomePage.Queries;
using OnlineShoppingStore.Application.SiteServices.Products.Queries.GetAllProductsInSite;
using OnlineShoppingStore.Models;
using OnlineShoppingStore.ViewModels.Home;
using System.Diagnostics;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly IMediator _mediator;

        public HomeController(ILogger<HomeController> logger,IMediator mediator)
        {
            _logger = logger;
            _mediator = mediator;
        }

        public async Task<IActionResult> Index()
        {
            var TakeCount = 10;
            HomeIndexViewModels homeIndexViewModels = new()
            {
                Slider = await _mediator.Send(new RequestGetPicsForSliderAndBanners()
                {
                    Take = TakeCount
                }),
                CandleProducts = await _mediator.Send(new RequestGetAllProductsInSite()
                {
                    CatId = 16,
                    SearchKey = null,
                    Page = 1,
                    Ordering = OrderingEnum.MostVisited,
                    PageSize= 1
                }),
            };
       
            return View(homeIndexViewModels);
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
