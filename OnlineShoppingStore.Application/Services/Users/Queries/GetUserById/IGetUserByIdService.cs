using OnlineShoppingStore.Common.ResultDto;

namespace OnlineShoppingStore.Application.Services.Users.Queries.GetUserById
{
    public  interface IGetUserByIdService
    {
        ResultDto<ResultGetUserByIdDto> ExecuteGetUserById(long userId);
    }

}
