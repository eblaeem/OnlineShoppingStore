using OnlineShoppingStore.Application.Services.Categories.Handlers.Queries.GetCategories;

namespace OnlineShoppingStore.Application.Services.Categories.Handlers.GetCategories
{
    public class ResponseCategoryDto
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public bool HasChild { get; set; }
        public ParentCategoryDto Parent { get; set; }
        public string CreateDate { get; set; }
    }
}
