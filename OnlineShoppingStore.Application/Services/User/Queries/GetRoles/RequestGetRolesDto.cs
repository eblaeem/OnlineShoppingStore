using MediatR;
using System.Collections.Generic;

namespace OnlineShoppingStore.Application.Services.Users.Queries.GetRoles
{
    public class RequestGetRolesDto : IRequest<ICollection<ResponseGetRolesDto>>
    {
        public static readonly RequestGetRolesDto Instance = new();
    }
}
