using MediatR;

namespace OnlineShoppingStore.Application.Services.Categories.Handlers.GetCategoryByIdService
{
    public class RequestGetCategoryByIdDto : IRequest<ResponseGetCategoryByIdDto>
    {
        public long Id { get; set; }
    }
}
