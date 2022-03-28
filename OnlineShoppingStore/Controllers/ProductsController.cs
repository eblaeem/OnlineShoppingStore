using MediatR;
using Microsoft.AspNetCore.Mvc;
using OnlineShoppingStore.Application.SiteServices.Products.Queries.GetAllProductDetailsInSite;
using OnlineShoppingStore.Application.SiteServices.Products.Queries.GetAllProductsInSite;
using System.Net;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Controllers
{
    public class ProductsController : Controller
    {
        private readonly IMediator _mediator;

        public ProductsController(IMediator mediator)
        {
            _mediator = mediator;
        }
        public async Task<IActionResult> Index(int page)
        {
            var result = await _mediator.Send(new RequestGetAllProductsInSite
            {
                Page = page
            });
            return View(result);
        }

        public async Task<IActionResult> Details(long id)
        {
            var result =await _mediator.Send(new RequestGetAllProductDetailsInSite
            {
                Id = id
            });
            return View(result);
        }
    }
}
