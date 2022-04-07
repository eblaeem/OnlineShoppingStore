using MediatR;
using Microsoft.AspNetCore.Mvc;
using OnlineShoppingStore.Application.SiteServices.Store.Queries.GetAllStoreInformation;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Views.Shared.Components.AboutUsInFooter
{
    public class AboutUsInFooter : ViewComponent
    {
        private readonly IMediator _mediatR;
        public AboutUsInFooter(IMediator mediatR)
        {
            _mediatR = mediatR;
        }
        public async Task<IViewComponentResult> InvokeAsync()
        {
            var result = await _mediatR.Send(RequestGetAllStoreInformation.Instance);
            return View(result);
        }
    }
}
