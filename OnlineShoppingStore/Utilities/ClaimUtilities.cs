using System;
using System.Security.Claims;

namespace OnlineShoppingStore.Utilities
{
    public static class ClaimUtilities
    {
        public static long? GetUSerId(ClaimsPrincipal claimsPrincipal)
        {
            try
            {
                var claimIdentity = claimsPrincipal.Identity as ClaimsIdentity;
                long userId = long.Parse(claimIdentity.FindFirst(ClaimTypes.NameIdentifier).Value);
                return userId;
            }
            catch (Exception)
            {
                return null;
            }
        }
    }
}
