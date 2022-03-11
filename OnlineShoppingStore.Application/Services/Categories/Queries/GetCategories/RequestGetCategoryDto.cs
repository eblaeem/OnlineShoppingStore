using MediatR;
using System.Collections.Generic;

namespace OnlineShoppingStore.Application.Services.Categories.Handlers.GetCategories
{
    public class RequestGetCategoryDto : IRequest<ICollection<ResponseCategoryDto>>
    {
        public long? ParentId { get; set; }
    }
}
