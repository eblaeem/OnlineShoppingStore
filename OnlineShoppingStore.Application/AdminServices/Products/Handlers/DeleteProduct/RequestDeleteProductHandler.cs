using MediatR;

namespace OnlineShoppingStore.Application.Services.Products.Handlers.DeleteProduct
{
    public class RequestDeleteProductHandler:IRequest<bool>
    {
        public long ProductId { get; set; }
    }
}
