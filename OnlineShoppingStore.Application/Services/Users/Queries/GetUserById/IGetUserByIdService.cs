using System.Threading.Tasks;

namespace OnlineShoppingStore.Application.Services.Users.Queries.GetUserById
{
    public interface IGetUserByIdService
    {
        Task<ResultGetUserByIdDto> ExecuteGetUserById(long userId);
    }
}
