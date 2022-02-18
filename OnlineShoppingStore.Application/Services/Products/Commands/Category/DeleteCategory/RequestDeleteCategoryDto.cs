using MediatR;

namespace OnlineShoppingStore.Application.Services.Products.Commands.DeleteCategoryService
{
    public class RequestDeleteCategoryDto: IRequest<bool>
    {
        public long Id { get; set; }
    }
}