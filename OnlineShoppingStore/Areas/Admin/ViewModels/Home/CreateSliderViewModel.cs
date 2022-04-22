using Microsoft.AspNetCore.Http;

namespace OnlineShoppingStore.Areas.Admin.ViewModels.Home
{
    public class CreateSliderViewModel
    {
        public IFormFile File { get; set; }
        public string Link { get; set; }
        public string Title { get; set; }
        public string PreTitle { get; set; }
        public string Pragraph { get; set; }
    }
}
