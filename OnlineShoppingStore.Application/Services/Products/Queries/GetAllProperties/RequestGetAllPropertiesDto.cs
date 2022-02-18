using MediatR;
using System.Collections.Generic;

namespace OnlineShoppingStore.Application.Services.Products.Queries.GetAllPropertiesService
{
    public class RequestGetAllPropertiesDto: IRequest<ICollection<ResponseGetAllPropertiesDto>>
    {
    }
}
