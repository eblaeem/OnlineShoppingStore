using FluentValidation;
using OnlineShoppingStore.Areas.Admin.Models;

namespace OnlineShoppingStore.Areas.Admin.Validation
{
    public class ModelValidate : AbstractValidator<CreateViewModel>
    {
        public ModelValidate()
        {
            RuleFor(CreateViewModel => CreateViewModel.FullName)
                .NotEmpty().WithMessage("مقدار نام و نام خانوادگی را تکمیل نمایید.")
                .NotNull().WithMessage("مقدار نام و نام خانوادگی را تکمیل نمایید.");

            RuleFor(CreateViewModel => CreateViewModel.Email)
                .NotEmpty().WithMessage("مقدار ایمیل را تکمیل نمایید.")
                .NotNull().WithMessage("مقدار ایمیل را تکمیل نمایید.")
                .EmailAddress().WithMessage("مقدار ایمیل را بصورت صحیح وارد نمایید.");

            //RuleFor(CreateViewModel => CreateViewModel.Password)
            //    .NotEmpty().WithMessage("مقدار رمز عبور را تکمیل نمایید.")
            //    .NotNull().WithMessage("مقدار رمز عبور را تکمیل نمایید.")
            //    .MinimumLength(6).WithMessage("حداقل طول رمز عبور 6 کاراکتر می باشد.")
            //    .Matches(@"(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{6,}")
            //    .WithMessage("در تنظیم رمز عبور استفاده از حروف بزرگ و کوچک، اعداد و کاراکترهای خاص الزامی است.")
            //    .Equal(CreateViewModel => CreateViewModel.RePassword).WithMessage("رمز عبور با تکرار آن همخوانی ندارد.");

            //RuleFor(CreateViewModel => CreateViewModel.RePassword)
            //    .NotEmpty().WithMessage("مقدار تکرار رمز عبور را تکمیل نمایید")
            //    .NotNull().WithMessage("مقدار تکرار رمز عبور را تکمیل نمایید")
            //    .MinimumLength(6).WithMessage("حداقل طول تکرار رمز عبور 6 کاراکتر می باشد.")
            //    .Matches(@"(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{6,}")
            //    .WithMessage("در تنظیم رمز عبور استفاده از حروف بزرگ و کوچک، اعداد و کاراکترهای خاص الزامی است.")
            //    .Equal(CreateViewModel => CreateViewModel.Password).WithMessage("رمز عبور با تکرار آن همخوانی ندارد.");
        }

    }

}
