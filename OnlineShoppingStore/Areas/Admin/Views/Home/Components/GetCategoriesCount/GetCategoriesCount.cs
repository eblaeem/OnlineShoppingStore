using MediatR;
using Microsoft.AspNetCore.Mvc;
using OnlineShoppingStore.Application.Services.Dashboard.Queries.Category;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Areas.Admin.Views.Home.Components.GetCategoriesCount
{
    public class GetCategoriesCount : ViewComponent
    {
        private readonly IMediator _mediator;

        public GetCategoriesCount(IMediator mediator)
        {
            _mediator = mediator;
        }
        public async Task<IViewComponentResult> InvokeAsync()
        {
            ViewBag.Count = await _mediator.Send(RequestGetCategoriesCount.Instance);
            return View();
        }
    }
}
