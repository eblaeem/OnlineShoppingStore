using OnlineShoppingStore.Application.Interfaces.Context;
using OnlineShoppingStore.Domain.Entities.User;
using System.Collections.Generic;
using OnlineShoppingStore.Common;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Application.Services.Users.Commands.CreateUser
{
    public class CreateUserService : ICreateUserService
    {
        private readonly IDataBaseContext _db;

        public CreateUserService(IDataBaseContext db)
        {
            _db = db;
        }

        public async Task<ResultCreateUserDto> ExecuteCreateUser(RequestCreateUserDto requset)
        {
            var passwordHasher = new PasswordHasher();
            var hashedPashword = passwordHasher.HashPassword(requset.Password);

            User user = new()
            {
                FullName = requset.FullName,
                Email = requset.Email,
                Password = hashedPashword,
                IsActive = true
            };
            List<UserRole> userRole = new();

            foreach (var item in requset.Roles)
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