using MediatR;
using Microsoft.EntityFrameworkCore;
using OnlineShoppingStore.Application.Interfaces.Context;
using OnlineShoppingStore.Common;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Application.Services.Users.Commands.UserLogin
{
    public class UserLoginHandler : IRequestHandler<RequestUserloginDto, ResponsetUserLoginDto>
    {
        private readonly IDataBaseContext _db;

        public UserLoginHandler(IDataBaseContext db)
        {
            _db = db;
        }

        public async Task<ResponsetUserLoginDto> Handle(RequestUserloginDto request, CancellationToken cancellationToken)
        {
            var user = await _db.Users.Include(u => u.UserRoles)
               .ThenInclude(u => u.Role)
               .Where(u => u.Email.Equals(request.UserName)
               && u.IsActive == true).FirstOrDefaultAsync();

            var passwordHasher = new PasswordHasher();
            bool resultVerifyPassword = passwordHasher.VerifyPassword(user.Password, request.Password);

            var roles = "";
            foreach (var item in user.UserRoles)
            {
                roles += $"{item.Role.Name}";
            }

            return new ResponsetUserLoginDto
            {
                Roles = roles,
                UserId = user.Id,
                FullName = user.FullName
            };
        }
    }
}
