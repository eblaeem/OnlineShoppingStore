using System.Collections.Generic;

namespace OnlineShoppingStore.Application.Services.Users.Queries.GetUsers
{
    public class ResultGetUserDto
    {
        public ICollection<GetUsersDto> Users { get; set; }
        public int Rows { get; set; }
    }
}
