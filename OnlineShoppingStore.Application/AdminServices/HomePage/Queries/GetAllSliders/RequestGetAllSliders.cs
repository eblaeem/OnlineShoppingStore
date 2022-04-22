using MediatR;
using System.Collections.Generic;

namespace OnlineShoppingStore.Application.AdminServices.HomePage.Queries.GetAllSliders
{
    public class RequestGetAllSliders : IRequest<List<ResponseGetAllSliders>>
    {
        public static readonly RequestGetAllSliders Instance = new();
    }
}
