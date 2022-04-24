using OnlineShoppingStore.Application.AdminServices.HomePage.Queries.GetPicsForSliderAndBannersInAdmin;
using OnlineShoppingStore.Application.SiteServices.Products.Queries.GetAllProductsInSite;
using System.Collections.Generic;

namespace OnlineShoppingStore.ViewModels.Home
{
    public class HomeIndexViewModels
    {
        public List<ResponseGetPicsForSliderAndBannersInAdmin> Slider { get; set; }
        public ResponseGetAllProductsInSiteDto CandleProducts { get; set; }
    }
}
