using MediatR;

namespace OnlineShoppingStore.Application.Services.Categories.Handlers.DeleteCategoryService
{
    public class RequestDeleteCategoryDto: IRequest<bool>
    {
        public long Id { get; set; }
    }
}