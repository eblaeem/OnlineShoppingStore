using MediatR;

namespace OnlineShoppingStore.Application.Services.Validation
{
    public class UniqueEmailRequest : IRequest<bool>
    {
        public string Email { get; set; }
    }
}
