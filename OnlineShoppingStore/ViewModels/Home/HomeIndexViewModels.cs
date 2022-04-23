using OnlineShoppingStore.Application.AdminServices.HomePage.Queries.GetAllSliders;
using OnlineShoppingStore.Application.SiteServices.Products.Queries.GetAllProductsInSite;
using System.Collections.Generic;

namespace OnlineShoppingStore.ViewModels.Home
{
    public class HomeIndexViewModels
    {
        public List<ResponseGetAllSliders> Slider { get; set; }
        public ResponseGetAllProductsInSiteDto CanldeProducts { get; set; }
    }
}
