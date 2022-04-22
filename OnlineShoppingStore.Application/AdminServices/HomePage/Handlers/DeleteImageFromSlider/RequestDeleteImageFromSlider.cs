using MediatR;

namespace OnlineShoppingStore.Application.AdminServices.HomePage.Handlers.DeleteImageFromSlider
{
    public class RequestDeleteImageFromSlider : IRequest<bool>
    {
        public long SliderImageId { get; set; }
    }
}
