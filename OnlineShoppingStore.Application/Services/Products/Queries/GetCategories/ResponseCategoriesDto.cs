namespace OnlineShoppingStore.Application.Services.Products.Queries.GetCategories
{
    public class ResponseCategoriesDto
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public bool HasChild { get; set; }
        public ParentCategoryDto Parent { get; set; }
        public string CreateDate { get; set; }
    }
}
