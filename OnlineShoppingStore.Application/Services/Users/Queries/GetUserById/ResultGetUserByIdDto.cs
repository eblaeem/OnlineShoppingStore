using OnlineShoppingStore.Domain.Entities.User;
using System.Collections.Generic;

namespace OnlineShoppingStore.Application.Services.Users.Queries.GetUserById
{
    public class ResultGetUserByIdDto
    {
        public string FullName { get; set; }
        public string Email { get; set; }
        public long RoleId { get; set; }
    }
}
