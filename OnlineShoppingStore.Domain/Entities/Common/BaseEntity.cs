using System;

namespace OnlineShoppingStore.Domain.Entities.Common
{
    public class BaseEntity<TKey>
    {
        public TKey Id { get; set; }
        public DateTime InsertTime { get; set; } = DateTime.Now;
        public DateTime UpdateTime { get; set; }
        public bool IsDeleted { get; set; }
        public DateTime? DeletedTime { get; set; }
    }

    public abstract class BaseEntity: BaseEntity<long>
    {

    }
}
