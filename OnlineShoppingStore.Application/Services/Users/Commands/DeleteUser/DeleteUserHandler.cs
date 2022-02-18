using MediatR;
using OnlineShoppingStore.Application.Interfaces.Context;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Application.Services.Users.Commands.DeleteUser
{
    public class DeleteUserHandler : IRequestHandler<RequestDeleteUserDto,bool>
    {
        private readonly IDataBaseContext _db;

        public DeleteUserHandler(IDataBaseContext db)
        {
            _db = db;
        }

        public async Task<bool> Handle(RequestDeleteUserDto request, CancellationToken cancellationToken)
        {
            var user = await _db.Users.FindAsync(request.UserId);
            if (user == null)
            {
                return false;
            }
            user.DeletedTime = DateTime.Now;
            user.IsDeleted = true;
            _db.SaveChanges();
            return true;
        }
    }
}
