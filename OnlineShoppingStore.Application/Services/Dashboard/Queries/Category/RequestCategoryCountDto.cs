using MediatR;

namespace OnlineShoppingStore.Application.Services.Dashboard.Queries.Categories
{
    public class RequestCategoryCountDto:IRequest<int>
    {
        public static readonly RequestCategoryCountDto Instance = new();
    }
}
