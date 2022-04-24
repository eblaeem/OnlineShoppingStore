using MediatR;
using OnlineShoppingStore.Application.AdminServices.HomePage.Queries.GetPicsForSliderAndBannersInAdmin;
using System.Collections.Generic;

namespace OnlineShoppingStore.Application.SiteServices.HomePage.Queries
{
    public class RequestGetPicsForSliderAndBanners : IRequest<List<ResponseGetPicsForSliderAndBannersInAdmin>>
    {
        //public static readonly RequestGetPicsForSliderAndBanners Instance = new();
        public int Take { get; set; }
    }

}
