using MediatR;
using Microsoft.AspNetCore.Mvc;
using OnlineShoppingStore.Application.SiteServices.Products.Queries.GetAllProductsInSite;
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
            return View(await _mediator.Send(new RequestGetAllProductsInSite{ Page = page}));
        }
    }
}
