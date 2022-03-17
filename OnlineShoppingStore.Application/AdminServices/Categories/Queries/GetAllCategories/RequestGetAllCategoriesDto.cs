using MediatR;
using System.Collections.Generic;

namespace OnlineShoppingStore.Application.Services.Categories.Handlers.GetAllCategoriesService
{
    public class RequestGetAllCategoriesDto : IRequest<ICollection<ResponseGetAllCategoriesDto>>
    {
        public static readonly RequestGetAllCategoriesDto Instance = new();
    }
}
