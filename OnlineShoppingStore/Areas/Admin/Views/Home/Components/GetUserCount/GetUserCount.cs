using Microsoft.AspNetCore.Mvc;
using OnlineShoppingStore.Application.Services.DashboardInfo.Queries;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Areas.Admin.Views.Dashbord.Components.GetCustomerCount
{
    public class GetUserCount : ViewComponent
    {
        private readonly IGetUserCount _getCustomerCount;

        public GetUserCount(IGetUserCount getCustomerCount)
        {
            _getCustomerCount = getCustomerCount;
        }

        public async Task<IViewComponentResult> InvokeAsync()
        {
            return View(_getCustomerCount.ExecuteGetUserCount());
        }
    }
}
