using MediatR;
using Microsoft.EntityFrameworkCore;
using OnlineShoppingStore.Application.Interfaces.Context;
using System.Threading;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Application.Services.Validation
{
    public class UniqueEmailQuery : IRequestHandler<UniqueEmailRequest, bool>
    {
        private readonly IDataBaseContext _db;

        public UniqueEmailQuery(IDataBaseContext db)
        {
            _db = db;
        }

        public async Task<bool> Handle(UniqueEmailRequest request, CancellationToken cancellationToken)
        {
            return !await _db.Users.AnyAsync(x=>x.Email.Equals(request.Email));
        }
    }
}
