using MediatR;
using System.Collections.Generic;

namespace OnlineShoppingStore.Application.Services.Products.Queries.GetAllProductService
{
    public class RequestGetAllProductDto : IRequest<ICollection<ResponseGetAllProductDto>>
    {
    }
}
