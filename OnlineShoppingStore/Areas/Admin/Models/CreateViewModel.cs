namespace OnlineShoppingStore.Areas.Admin.Models
{
    public class CreateViewModel
    {
        public string Email { get; set; }
        public string FullName { get; set; }
        public string Password { get; set; }
        public string RePassword { get; set; }
        public long RoleId { get; set; }

    }
}
