using MediatR;
using OnlineShoppingStore.Application.Services.Users.Commands.CreateUser;
using System.Collections.Generic;

namespace OnlineShoppingStore.Application.Services.Users.Commands.EditUser
{
    public class RequestEditDto : IRequest<bool>
    {
        public long Id { get; set; }
        public string FullName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string RePassword { get; set; }
        public ICollection<RolesCreateUserDto> Roles { get; set; }
    }

}
