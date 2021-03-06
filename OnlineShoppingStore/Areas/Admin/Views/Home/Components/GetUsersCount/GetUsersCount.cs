using MediatR;
using Microsoft.AspNetCore.Mvc;
using OnlineShoppingStore.Application.Services.Dashboard.Queries.User;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Areas.Admin.Views.Home.Components.GetUsersCount
{
    public class GetUsersCount : ViewComponent
    {
        private readonly IMediator _mediator;

        public GetUsersCount(IMediator mediator)
        {
            _mediator = mediator;
        }

        public async Task<IViewComponentResult> InvokeAsync()
        { 
            ViewBag.Count =  await _mediator.Send(RequestGetUserCount.Instance);
            return View();
        }
    }
}
