using OnlineShoppingStore.Domain.Entities.Common;
using OnlineShoppingStore.Domain.Entities.UserEntity;
using System;
using System.Collections.Generic;

namespace OnlineShoppingStore.Domain.Entities.Cart
{
    public class ShoppingCart : BaseEntity
    {
        public long? UserId { get; set; }
        public Guid BrowserToken { get; set; } 
        public bool Finished { get; set; }
        
        public User User { get; set; }
        public ICollection<CartItem> CartItems { get; set; } = new HashSet<CartItem>();
    }
}
