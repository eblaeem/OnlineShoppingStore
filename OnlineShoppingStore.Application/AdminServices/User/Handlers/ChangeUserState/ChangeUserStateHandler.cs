using MediatR;
using OnlineShoppingStore.Application.Interfaces.Context;
using System.Threading;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Application.Services.Users.Commands.ChangeUserState
{
    public class ChangeUserStateHandler : IRequestHandler<RequestChangeUserStateDto, UserStateEnum>
    {
        private readonly IDataBaseContext _db;

        public ChangeUserStateHandler(IDataBaseContext db)
        {
            _db = db;
        }

        public async Task<UserStateEnum> Handle(RequestChangeUserStateDto request, CancellationToken cancellationToken)
        {
            var user = await _db.Users.FindAsync(request.UserId);
            if (user == null)
            {
                return UserStateEnum.NotFound;
            }
            if (user.IsActive)
            {
                user.IsActive = false;
                await _db.SaveChangesAsync();
                return UserStateEnum.Deactive;
            }
            else
                user.IsActive = true;
            await _db.SaveChangesAsync();
            return UserStateEnum.Active;
        }
    }
}
