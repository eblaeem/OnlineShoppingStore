using FluentValidation;

namespace OnlineShoppingStore.Areas.Admin.Models.EditCategoryViewModel
{
    public class EditCategoriesModel
    {
        public long Id { get; set;}
        public string Name { get; set;}
    }

    public class EditCategoriesValidation : AbstractValidator<EditCategoriesModel>
    {
        public EditCategoriesValidation()
        {
            RuleFor(c => c.Name)
                .NotEmpty().WithMessage("مقدار گروه محصول را تکمیل نمایید.")
                .NotNull().WithMessage("مقدار گروه محصول را تکمیل نمایید.");
        }
    }
}
