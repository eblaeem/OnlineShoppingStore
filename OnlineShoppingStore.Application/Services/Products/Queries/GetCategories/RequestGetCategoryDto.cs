using MediatR;
using System.Collections.Generic;

namespace OnlineShoppingStore.Application.Services.Products.Queries.GetCategories
{
    public class RequestGetCategoryDto : IRequest<ICollection<ResponseCategoriesDto>>
    {
        public long? ParentId { get; set; }
    }
}
