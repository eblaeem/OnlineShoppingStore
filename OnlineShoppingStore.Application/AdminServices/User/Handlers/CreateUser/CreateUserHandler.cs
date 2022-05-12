using OnlineShoppingStore.Application.Interfaces.Context;
using OnlineShoppingStore.Domain.Entities.UserEntity;
using System.Collections.Generic;
using OnlineShoppingStore.Common;
using System.Threading.Tasks;
using MediatR;
using System.Threading;

namespace OnlineShoppingStore.Application.Services.Users.Commands.CreateUser
{
    public class CreateUserHandler : IRequestHandler<RequestCreateUserDto, ResultCreateUserDto>
    {
        private readonly IDataBaseContext _db;

        public CreateUserHandler(IDataBaseContext db)
        {
            _db = db;
        }

        public async Task<ResultCreateUserDto> Handle(RequestCreateUserDto request, CancellationToken cancellationToken)
        {
            var passwordHasher = new PasswordHasher();
            var hashedPashword = passwordHasher.HashPassword(request.Password);

            User user = new()
            {
                FullName = request.FullName,
                Email = request.Email,
                Password = hashedPashword,
                IsActive = true
            };
            List<UserRole> userRole = new();

            foreach (var item in request.Roles)
            {
                var roles = await _db.Roles.FindAsync(item.Id);
                userRole.Add(new UserRole
                {
                    Role = roles,
                    RoleId = roles.Id,
                    User = user,
                    UserId = user.Id
                });
            }

            user.UserRoles = userRole;

            _db.Users.Add(user);
            await _db.SaveChangesAsync();

            return new ResultCreateUserDto()
            {
                UserId = user.Id,
                Result = true
            };
        }
    }
}