using System.Collections.Generic;

namespace OnlineShoppingStore.Domain.Entities.Products
{
    public class PropertyType
    {
        public long Id { get; set; }
        public string Name { get; set; }

        public virtual ICollection<Property> Properties { get; set; } = new HashSet<Property>();
    }
}
