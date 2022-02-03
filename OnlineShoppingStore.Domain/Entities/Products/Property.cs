using System.Collections.Generic;

namespace OnlineShoppingStore.Domain.Entities.Products
{
    public class Property
    {
        public long Id { get; set; }
        public string Title { get; set; }  /*Color - Weight - PageNumbers & ... */


        public virtual PropertyType PropertyType { get; set; }
        public virtual ICollection<ProductProperty> ProductProperties { get; set; } = new HashSet<ProductProperty>();
    }
}
