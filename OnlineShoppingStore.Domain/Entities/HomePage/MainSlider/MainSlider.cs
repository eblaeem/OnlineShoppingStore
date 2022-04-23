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
        public Location DisplayIn { get; set; }
        public bool IsVisibility { get; set; }
    }

    public enum Location
    {
        Top = 0,
        Bottom = 1,
        Left = 2,
        Right = 3,
        TopLeft = 4,
        TopRight = 5,
        BottomLeft = 6,
        BottomRight = 7,
        Center = 8
    }
}
 