using OnlineShoppingStore.Application.Services.Users.Commands.CreateUser;
using System.Collections.Generic;

namespace OnlineShoppingStore.Areas.Admin.Models
{
    public class EditViewModel
    {
        public long Id { get; set; }
        public string Email { get; set; }
        public string FullName { get; set; }
        public long RoleId { get; set; }
    }
}
