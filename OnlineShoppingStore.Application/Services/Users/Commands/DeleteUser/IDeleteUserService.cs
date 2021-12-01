using OnlineShoppingStore.Common.ResultDto;

namespace OnlineShoppingStore.Application.Services.Users.Commands.DeleteUser
{
    public interface IDeleteUserService
    {
        ResultDto<ResultDeleteUserDto> ExecuteDeleteUser(long id);
    }

    public class ResultDeleteUserDto
    {
        public long UserId { get; set; }
    }
}
