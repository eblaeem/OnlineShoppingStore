using MediatR;
using System.Collections.Generic;

namespace OnlineShoppingStore.Application.Services.Products.Queries.GetAllProductService
{
    public class RequestGetAllProductsDto : IRequest<ICollection<ResponseGetAllProductsDto>>
    {
    }
}
