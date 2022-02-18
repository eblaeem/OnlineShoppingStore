using MediatR;

namespace OnlineShoppingStore.Application.Services.Dashboard.Queries.Categories
{
    public class RequestCategoryCountDto:IRequest<ResponseCategoryCountDto>
    {
        public static readonly RequestCategoryCountDto Instance = new();
    }
}
