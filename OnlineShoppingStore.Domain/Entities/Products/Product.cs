using System.Collections.Generic;

namespace OnlineShoppingStore.Domain.Entities.Products
{
    public class Product
    {
        public long Id { get; set; }
        public string Name { get; set; }


        public virtual ICollection<ProductCategory> ProductCategories { get; set; } = new HashSet<ProductCategory>();
        public virtual ICollection<ProductProperty> ProductProperties { get; set; } = new HashSet<ProductProperty>();
        public virtual ICollection<Image> Images { get; set; } = new HashSet<Image>();
        public virtual ICollection<Cost> Costs { get; set; } = new HashSet<Cost>();
    }
}
