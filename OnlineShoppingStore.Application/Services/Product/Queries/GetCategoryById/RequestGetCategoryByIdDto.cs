using MediatR;

namespace OnlineShoppingStore.Application.Services.Products.Queries.GetCategoryByIdService
{
    public class RequestGetCategoryByIdDto : IRequest<ResponseGetCategoryByIdDto>
    {
        public long Id { get; set; }
    }
}
