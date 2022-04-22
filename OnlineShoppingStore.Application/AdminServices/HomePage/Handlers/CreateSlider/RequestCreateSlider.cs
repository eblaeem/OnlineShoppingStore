using MediatR;
using Microsoft.AspNetCore.Http;

namespace OnlineShoppingStore.Application.AdminServices.HomePage.Handlers.CreateSlider
{
    public class RequestCreateSlider :IRequest<bool>
    {
        public IFormFile File { get; set; }
        public string Link { get; set; }
        public string Title { get; set; }
        public string PreTitle { get; set; }
        public string Paragraph { get; set; }
    }
}
