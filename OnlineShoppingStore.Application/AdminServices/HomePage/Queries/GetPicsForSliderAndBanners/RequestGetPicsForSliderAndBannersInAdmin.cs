using MediatR;
using System.Collections.Generic;

namespace OnlineShoppingStore.Application.AdminServices.HomePage.Queries.GetPicsForSliderAndBannersInAdmin
{
    public class RequestGetPicsForSliderAndBannersInAdmin : IRequest<List<ResponseGetPicsForSliderAndBannersInAdmin>>
    {
        public static readonly RequestGetPicsForSliderAndBannersInAdmin Instance = new();
    }
}
