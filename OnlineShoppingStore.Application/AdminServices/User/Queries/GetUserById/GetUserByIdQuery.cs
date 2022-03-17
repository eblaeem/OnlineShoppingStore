using OnlineShoppingStore.Application.Interfaces.Context;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;
using MediatR;
using System.Threading;

namespace OnlineShoppingStore.Application.Services.Users.Queries.GetUserById
{
    public class GetUserByIdQuery : IRequestHandler<RequestGetUserByIdDto, ResultGetUserByIdDto>
    {
        private readonly IDataBaseContext _db;

        public GetUserByIdQuery(IDataBaseContext db)
        {
            _db = db;
        }

        public async Task<ResultGetUserByIdDto> Handle(RequestGetUserByIdDto request, CancellationToken cancellationToken)
        {
            var user = await _db.Users.Include(e => e.UserRoles).FirstOrDefaultAsync(e => e.Id == request.UserId);
            return new ResultGetUserByIdDto
            {
                FullName = user.FullName,
                Email = user.Email,
                Passwrod = user.Password,
                RePasswrod = user.Password,
                RoleId = user.UserRoles.FirstOrDefault().RoleId,
            };
        }
    }
}
