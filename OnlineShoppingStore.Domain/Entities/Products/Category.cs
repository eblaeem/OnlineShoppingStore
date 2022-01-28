using OnlineShoppingStore.Domain.Entities.Common;
using System.Collections.Generic;

namespace OnlineShoppingStore.Domain.Entities.Products
{
    public class Category : BaseEntity
    {
        public string Name { get; set; }
        public long? ParentCategoryId { get; set; }


        public virtual Category ParentCategory { get; set; }
        //برای نمایش زیر دسته های هر گروه
        public virtual ICollection<Category> SubCategories { get; set; } = new HashSet<Category>();
        
        private ICollection<ProductCategory> _productCategories;
        public virtual ICollection<ProductCategory> ProductCategories
        {
            get
            {
                //if (_productCategories == null)
                //{
                //    _productCategories = new List<ProductCategory>();
                //}
                return _productCategories ??= new HashSet<ProductCategory>();
            }
            set
            {
                _productCategories = value;
            }
        }
    }
}
