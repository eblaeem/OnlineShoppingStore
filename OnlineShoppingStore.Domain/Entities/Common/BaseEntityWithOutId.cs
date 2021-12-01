using System;

namespace OnlineShoppingStore.Domain.Entities.Common
{
    public class BaseEntityWithOutId
    {
        public DateTime InsertTime { get; set; } = DateTime.Now;
        public DateTime UpdateTime { get; set; }
        public bool IsDeleted { get; set; }
        public DateTime? DeletedTime { get; set; }
    }
}
