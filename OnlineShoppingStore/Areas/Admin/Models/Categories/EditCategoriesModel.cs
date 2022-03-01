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
                .NotEmpty().WithMessage("نام دسته محصول را تکمیل نمایید.")
                .NotNull().WithMessage("نام دسته بندی محصول را تکمیل نمایید.");
        }
    }
}
