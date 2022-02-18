using System.Reflection;

namespace OnlineShoppingStore.Application
{
    public class ApplicationMarker
    {
        public static readonly Assembly Assembly = typeof(ApplicationMarker).Assembly;
    }
}
