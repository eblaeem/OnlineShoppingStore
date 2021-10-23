namespace OnlineShoppingStore.Domain.Entities.User
{
    public class UserRole
    {
        public virtual User User { get; set; }
        public virtual Role Role { get; set; }
    }
}
