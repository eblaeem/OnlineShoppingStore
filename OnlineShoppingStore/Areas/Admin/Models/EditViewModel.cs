namespace OnlineShoppingStore.Areas.Admin.Models
{
    public class EditViewModel
    {
        public long Id { get; set; }
        public string Email { get; set; }
        public string FullName { get; set; }
        public string Password { get;set ; }
        public string RePassword { get;set ; }
        public long RoleId { get; set; }
    }
}
