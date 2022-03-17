namespace OnlineShoppingStore.Application.Services.Users.Commands.UserLogin
{
    public class ResponseUserLoginDto
    {
        public long UserId { get; set; }
        public string Roles { get; set; }
        public string FullName { get; set; }
    }
}
