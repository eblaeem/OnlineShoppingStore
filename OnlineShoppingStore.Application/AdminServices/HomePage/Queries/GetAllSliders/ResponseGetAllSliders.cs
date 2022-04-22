namespace OnlineShoppingStore.Application.AdminServices.HomePage.Queries.GetAllSliders
{
    public class ResponseGetAllSliders
    {
        public long Id { get; set; }
        public string Src { get; set; }
        public string Link { get; set; }
        public string Title { get; set; }
        public string PreTitle { get; set; }
        public string Paragraph { get; set; }
        public Location Location { get; set; }

    }

    public enum Location
    {
        Top,
        TopLeft,
        TopRight,
        Middle,
        Bottom,
        BottomLeft,
        BottomRight
    }
}
