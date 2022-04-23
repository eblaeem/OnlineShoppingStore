using MediatR;
using OnlineShoppingStore.Application.AdminServices.HomePage.Queries.GetAllSliders;
using System.Collections.Generic;

namespace OnlineShoppingStore.Application.SiteServices.HomePage.Queries
{
    public class RequestGetPicsForSliderAndBanners : IRequest<List<ResponseGetAllSliders>>
    {
        public static readonly RequestGetPicsForSliderAndBanners Instance = new();
    }

}
