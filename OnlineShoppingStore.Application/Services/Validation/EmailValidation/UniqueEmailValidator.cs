using FluentValidation;
using FluentValidation.Validators;
using MediatR;
using Microsoft.Extensions.DependencyInjection;
using System.Threading;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Application.Services.Validation
{
    public class UniqueEmailValidator<T> : AsyncPropertyValidator<T, string>
    {
        public override string Name => "UniqueEmailValidator";

        public override Task<bool> IsValidAsync(ValidationContext<T> context, string value, CancellationToken cancellation)
        {
            return context
                .GetServiceProvider()
                .GetRequiredService<IMediator>()
                .Send(new UniqueEmailRequest { Email = value }, cancellation);
        }
    }
    public static class UniqueEmailValidatorExtensions
    {
        public static IRuleBuilderOptions<T, string> UniqueEmail<T>(this IRuleBuilder<T, string> ruleBuilder)
        {
            return ruleBuilder.SetAsyncValidator(new UniqueEmailValidator<T>());
        }
    }
}
