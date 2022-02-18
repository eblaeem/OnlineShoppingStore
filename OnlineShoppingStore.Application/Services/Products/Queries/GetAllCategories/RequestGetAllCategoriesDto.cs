using MediatR;
using System.Collections.Generic;

namespace OnlineShoppingStore.Application.Services.Products.Queries.GetAllCategoriesService
{
    public class RequestGetAllCategoriesDto : IRequest<ICollection<ResponseGetAllCategoriesDto>>
    {
    }
}
