using OnlineShoppingStore.Domain.Entities.Common;
using OnlineShoppingStore.Domain.Entities.Products;

namespace OnlineShoppingStore.Domain.Entities.Cart
{
    public class CartItem : BaseEntity
    {
        public long ProductId { get; set; }
        public long ShoppingCartId { get; set; }
        public int Count { get; set; }
        public decimal Price { get; set; }


        public virtual Product Product { get; set; }
        public virtual ShoppingCart ShoppingCart { get; set; }
    }
}
