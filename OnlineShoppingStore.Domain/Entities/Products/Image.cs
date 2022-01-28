using OnlineShoppingStore.Domain.Entities.Common;

namespace OnlineShoppingStore.Domain.Entities.Products
{
    public class Image:BaseEntity
    {
        public string Src { get; set; }
        public long ProductId { get; set; }


        public Product Product { get; set; }

    }
}
