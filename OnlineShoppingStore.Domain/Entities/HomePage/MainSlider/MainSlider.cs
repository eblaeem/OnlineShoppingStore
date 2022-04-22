using OnlineShoppingStore.Domain.Entities.Common;

namespace OnlineShoppingStore.Domain.Entities.HomePage.MainSlider
{
    public class MainSlider:BaseEntity
    {
        public string Src { get; set; }
        public string Link { get; set; }
        public string Title { get; set; }
        public string PreTitle { get; set; }
        public string Paragraph { get; set; }
        public bool DisplayIn { get; set; }

    }
}
 