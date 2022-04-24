using OnlineShoppingStore.Domain.Entities.HomePage.MainSlider;

namespace OnlineShoppingStore.Application.AdminServices.HomePage.Queries.GetPicsForSliderAndBannersInAdmin
{
    public class ResponseGetPicsForSliderAndBannersInAdmin
    {
        public long Id { get; set; }
        public string Src { get; set; }
        public string Link { get; set; }
        public string Title { get; set; }
        public string PreTitle { get; set; }
        public string Paragraph { get; set; }
        public Location LocationEnum { get; set; }
        public bool IsVisibility { get; set; }
    }

}
