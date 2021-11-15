using System.Collections.Generic;
using static OnlineShoppingStore.Application.Services.Users.Commands.CreateUser.CreateUserService;

namespace OnlineShoppingStore.Application.Services.Users.Commands.CreateUser
{
    public class RequsetCreateUserDto
    {
        public string FullName { get; set; }
        public string Email { get; set; }
        public ICollection<RolesCreateUserDto> Roles { get; set; }
    }
}
