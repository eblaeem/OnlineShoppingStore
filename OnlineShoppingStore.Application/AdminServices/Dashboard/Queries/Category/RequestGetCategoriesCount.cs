using MediatR;

namespace OnlineShoppingStore.Application.Services.Dashboard.Queries.Category
{
    public class RequestGetCategoriesCount:IRequest<int>
    {
        public static readonly RequestGetCategoriesCount Instance = new();
    }
}
