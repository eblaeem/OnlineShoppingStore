namespace OnlineShoppingStore.Application.Services.Products.Commands.EditCategoryService
{
    public partial class EditCategoryService
    {
        public class RequestEditDto
        {
            public long Id { get; set; }
            public string Name { get; set; }
        }
    }
}
