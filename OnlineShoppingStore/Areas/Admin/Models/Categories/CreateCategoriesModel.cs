using FluentValidation;

namespace OnlineShoppingStore.Areas.Admin.Models.CategoriesViewModel
{
    public class CreateCategoriesModel
    {
        public long? parentId { get; set; }
        public string Name { get; set; }
    }

    public class CreateCategoriesValidation : AbstractValidator<CreateCategoriesModel>
    {
        public CreateCategoriesValidation()
        {
            RuleFor(c => c.Name)
                .NotEmpty().WithMessage("مقدار گروه محصول را تکمیل نمایید.")
                .NotNull().WithMessage("مقدار گروه محصول را تکمیل نمایید.");
        }
    }

}
