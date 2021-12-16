using FluentValidation;
using OnlineShoppingStore.Models.ViewModels.AuthenticationViewModel;

namespace OnlineShoppingStore.Models.ViewModels.ViewModelValidation
{
    public class SignInViewModelValidation: AbstractValidator<SignInViewModel>
    {
        public SignInViewModelValidation()
        {
            RuleFor(SignInViewModel => SignInViewModel.Email)
             .NotEmpty().WithMessage("مقدار ایمیل را تکمیل نمایید.")
             .NotNull().WithMessage("مقدار ایمیل را تکمیل نمایید.")
             .EmailAddress().WithMessage("مقدار ایمیل را بصورت صحیح وارد نمایید.");

            RuleFor(SignInViewModel => SignInViewModel.Password)
                .NotEmpty().WithMessage("مقدار رمز عبور را تکمیل نمایید.")
                .NotNull().WithMessage("مقدار رمز عبور را تکمیل نمایید.");
        }
    }
}
