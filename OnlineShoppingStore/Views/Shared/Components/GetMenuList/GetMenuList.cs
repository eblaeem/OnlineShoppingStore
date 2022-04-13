using MediatR;
using Microsoft.AspNetCore.Mvc;
using OnlineShoppingStore.Application.SiteServices.Menu.Queries;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Views.Shared.Components.GetMenuList
{
    public class GetMenuList:ViewComponent
    {
        private readonly IMediator _mediatR;

        public GetMenuList(IMediator mediatR)
        {
            _mediatR = mediatR;
        }
        public async Task<IViewComponentResult> InvokeAsync()
        {
            var menu = await _mediatR.Send(RequestGetMenuItems.Instance);
            return View(menu);
        }
    }
}

