using OnlineShoppingStore.Domain.Entities.Common;
using System.Collections.Generic;

namespace OnlineShoppingStore.Domain.Entities.Products
{
    public class Product:BaseEntity
    {
        public decimal Quantity { get; set; }
        public decimal BasePrice { get; set; }
        public string Name { get; set; }
        public bool Displayed { get; set; }
        public int Star { get; set; }


        public virtual ICollection<ProductCategory> ProductCategories { get; set; } = new HashSet<ProductCategory>();
        public virtual ICollection<ProductProperty> ProductProperties { get; set; } = new HashSet<ProductProperty>();
        public virtual ICollection<OrderItem> Items { get; set; } = new HashSet<OrderItem>();
        public virtual ICollection<Image> Images { get; set; } = new HashSet<Image>();
        public virtual ICollection<Cost> Costs { get; set; } = new HashSet<Cost>();
    }
}
