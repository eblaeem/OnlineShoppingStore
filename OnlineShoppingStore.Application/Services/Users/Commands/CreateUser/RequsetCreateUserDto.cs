using MediatR;
using System.Collections.Generic;

namespace OnlineShoppingStore.Application.Services.Users.Commands.CreateUser
{
    public class RequestCreateUserDto : IRequest<ResultCreateUserDto>
    {
        public string FullName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string RePassword { get; set; }
        public ICollection<RolesCreateUserDto> Roles { get; set; }
    }
}
