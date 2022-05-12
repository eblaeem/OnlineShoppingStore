using MediatR;
using OnlineShoppingStore.Application.Interfaces.Context;
using OnlineShoppingStore.Common;
using OnlineShoppingStore.Domain.Entities.UserEntity;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;



namespace OnlineShoppingStore.Application.Services.Users.Queries.GetUsers
{
    public class GetUsersQuery : IRequestHandler<RequstGetUserDto, ResultGetUserDto>
    {
        private readonly IDataBaseContext _db;

        public GetUsersQuery(IDataBaseContext db)
        {
            _db = db;
        }

        public async Task<ResultGetUserDto> Handle(RequstGetUserDto request, CancellationToken cancellationToken)
        {
            IQueryable<User> query = _db.Users;

            if (!string.IsNullOrWhiteSpace(request.SearchKey))
            {
                query = query.Where(
                    p => p.FullName.Contains(request.SearchKey) &&
                    p.Email.Contains(request.SearchKey));
            }
            var userList =query.ToPaged(request.Page, 20, out int rowsCount)
                                .Where(p => !p.IsDeleted)
                                .Select(p => new GetUsersDto
                                {
                                    CreateDate = p.InsertTime.ToshamsiDate(),
                                    FullName = p.FullName,
                                    Email = p.Email,
                                    Id = p.Id,
                                    IsActive = p.IsActive,
                                }).ToList();

            return new ResultGetUserDto()
            {
                Rows = rowsCount,
                Users = userList
            };
        }
    }
}
