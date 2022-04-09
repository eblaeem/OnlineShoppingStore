using MediatR;
using System.Collections.Generic;

namespace OnlineShoppingStore.Application.SiteServices.Menu.Queries
{
    public class RequestGetMenuItems : IRequest<List<ResponseGetMenuItems>>
    {
        public static readonly RequestGetMenuItems Instance = new();
    }
}
