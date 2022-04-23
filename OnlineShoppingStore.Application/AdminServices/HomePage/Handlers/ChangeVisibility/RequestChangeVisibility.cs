using MediatR;

namespace OnlineShoppingStore.Application.AdminServices.HomePage.Handlers.ChangeVisibility
{
    public class RequestChangeVisibility:IRequest<bool>
    {
        public long Id { get; set; }
    }

}
