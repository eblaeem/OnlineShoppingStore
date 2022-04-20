using MediatR;
using System.Collections.Generic;

namespace OnlineShoppingStore.Application.Services.Products.Queries.GetAllProductService
{
    public class RequestGetAllProductsDto : IRequest<ResponseGetAllProductsDto>
    {
        public int Page { get; set; } = 1;
        public int PageSize { get; set; } = 20;

    }
}
