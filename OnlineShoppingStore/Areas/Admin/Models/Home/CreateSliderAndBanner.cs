using FluentValidation;
using Microsoft.AspNetCore.Http;
using OnlineShoppingStore.Domain.Entities.HomePage.MainSlider;

namespace OnlineShoppingStore.Areas.Admin.Models.Home
{
    public class CreateSliderAndBanner
    {
        public IFormFile File { get; set; }
        public string Link { get; set; }
        public string Title { get; set; }
        public string PreTitle { get; set; }
        public string Paragraph { get; set; }
        public Location LocationEnum { get; set; }
    }

    public class CreateSliderAndBannerValidation : AbstractValidator<CreateSliderAndBanner>
    {
        public CreateSliderAndBannerValidation()
        {
            RuleFor(c => c.File)
                .NotEmpty().WithMessage("لطفاً تصویر اسلایدر را آپلود نمایید.")
                .NotNull().WithMessage ("لطفاً تصویر اسلایدر را آپلود نمایید.");

            RuleFor(c => c.Link)
                .NotNull().WithMessage("لطفاٌ مقدار لینک را وارد نمایید.");

            RuleFor(c => c.Title)
                .NotEmpty().WithMessage("لطفاٌ مقدار عنوان را وارد نمایید.")
                .NotNull().WithMessage ("لطفاٌ مقدار عنوان را وارد نمایید.");

            RuleFor(c => c.PreTitle)
                .NotEmpty().WithMessage("لطفاٌ مقدار عنوان دوم را وارد نمایید.")
                .NotNull().WithMessage("لطفاٌ مقدار عنوان دوم را وارد نمایید.");

            RuleFor(c => c.Paragraph)
                .NotEmpty().WithMessage("لطفاٌ مقدار متن را وارد نمایید.")
                .NotNull().WithMessage("لطفاٌ مقدار متن را وارد نمایید.");
        }
    }
}
