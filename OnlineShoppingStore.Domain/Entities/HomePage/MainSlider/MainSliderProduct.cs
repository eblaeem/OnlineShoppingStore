using OnlineShoppingStore.Domain.Entities.Products;

namespace OnlineShoppingStore.Domain.Entities.HomePage.MainSlider
{
    public class MainSliderProduct
    {
        public long  MainSliderId { get; set; }
        public long  ProductId { get; set; }


        public MainSlider MainSlider { get; set; }
        public Product Product { get; set; }
    }
}
 