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
                .NotEmpty().WithMessage("نام دسته محصول را تکمیل نمایید.")
                .NotNull().WithMessage("نام دسته بندی محصول را تکمیل نمایید.");
        }
    }

}
