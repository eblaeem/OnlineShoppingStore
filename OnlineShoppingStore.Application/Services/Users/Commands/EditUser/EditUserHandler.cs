using MediatR;
using OnlineShoppingStore.Application.Interfaces.Context;
using OnlineShoppingStore.Common.ResultDto;
using OnlineShoppingStore.Domain.Entities.User;
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Application.Services.Users.Commands.EditUser
{
    public class EditUserHandler : IRequestHandler<RequestEditDto,bool>
    {
        private readonly IDataBaseContext _db;

        public EditUserHandler(IDataBaseContext db)
        {
            _db = db;
        }

        public async Task<bool> Handle(RequestEditDto request, CancellationToken cancellationToken)
        {
            var user = await _db.Users.FindAsync(request.Id);
            if (user == null)
            {
                return false;
            }
            user.FullName = request.FullName;
            user.Email = request.Email;

            List<UserRole> userRoles = new List<UserRole>();

            foreach (var item in request.Roles)
            {
                var roles = _db.Roles.Find(item.Id);
                userRoles.Add(new UserRole
                {
                    Role = roles,
                    RoleId = roles.Id,
                    User = user,
                    UserId = user.Id
                });
            }
            user.UserRoles = userRoles;

            await _db.SaveChangesAsync();
            return true;
        }
    }
}
