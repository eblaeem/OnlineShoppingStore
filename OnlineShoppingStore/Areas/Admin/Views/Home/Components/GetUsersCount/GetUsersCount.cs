using Microsoft.AspNetCore.Mvc;
using OnlineShoppingStore.Application.Services.DashboardInfo.Queries;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Areas.Admin.Views.Home.Components.GetUsersCount
{
    public class GetUsersCount : ViewComponent
    {
        private readonly IGetUserCountService _getCustomerCount;

        public GetUsersCount(IGetUserCountService getCustomerCount)
        {
            _getCustomerCount = getCustomerCount;
        }

        public async Task<IViewComponentResult> InvokeAsync()
        {
            return View(_getCustomerCount.ExecuteGetUserCount());
        }
    }
}
