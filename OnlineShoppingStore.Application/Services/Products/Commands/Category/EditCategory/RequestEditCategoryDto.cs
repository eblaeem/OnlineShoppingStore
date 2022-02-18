using MediatR;

namespace OnlineShoppingStore.Application.Services.Products.Commands.EditCategoryService
{
    public class RequestEditCategoryDto : IRequest<bool>
    {
        public long Id { get; set; }
        public string Name { get; set; }
    }
}
