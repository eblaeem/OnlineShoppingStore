using FluentValidation;
using OnlineShoppingStore.Models.ViewModels.AuthenticationViewModel;

namespace OnlineShoppingStore.Models.ViewModels.ViewModelValidation
{
    public class SignUpViewModelValidation: AbstractValidator<SignUpViewModel>
    {
        public SignUpViewModelValidation()
        {
            RuleFor(SignUpViewModel => SignUpViewModel.FullName)
                .NotEmpty().WithMessage("مقدار نام و نام خانوادگی را تکمیل نمایید.")
                .NotNull().WithMessage("مقدار نام و نام خانوادگی را تکمیل نمایید.");

            RuleFor(SignUpViewModel => SignUpViewModel.Email)
                .NotEmpty().WithMessage("مقدار ایمیل را تکمیل نمایید.")
                .NotNull().WithMessage("مقدار ایمیل را تکمیل نمایید.")
                .EmailAddress().WithMessage("مقدار ایمیل را بصورت صحیح وارد نمایید.");

            RuleFor(SignUpViewModel => SignUpViewModel.Password)
                .NotEmpty().WithMessage("مقدار رمز عبور را تکمیل نمایید.")
                .NotNull().WithMessage("مقدار رمز عبور را تکمیل نمایید.")
                .MinimumLength(6).WithMessage("حداقل طول رمز عبور 6 کاراکتر می باشد.")
                .Matches(@"(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{6,}")
                .WithMessage("در تنظیم رمز عبور استفاده از حروف بزرگ و کوچک، اعداد و کاراکترهای خاص الزامی است.")
                .Equal(SignUpViewModel => SignUpViewModel.RePassword).WithMessage("رمز عبور با تکرار آن همخوانی ندارد.");

            RuleFor(SignUpViewModel => SignUpViewModel.RePassword)
                .NotEmpty().WithMessage("مقدار تکرار رمز عبور را تکمیل نمایید")
                .NotNull().WithMessage("مقدار تکرار رمز عبور را تکمیل نمایید")
                .MinimumLength(6).WithMessage("حداقل طول تکرار رمز عبور 6 کاراکتر می باشد.")
                .Matches(@"(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{6,}")
                .WithMessage("در تنظیم رمز عبور استفاده از حروف بزرگ و کوچک، اعداد و کاراکترهای خاص الزامی است.")
                .Equal(SignUpViewModel => SignUpViewModel.Password).WithMessage("رمز عبور با تکرار آن همخوانی ندارد.");

        }
    }
}
