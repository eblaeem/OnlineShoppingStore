using Microsoft.AspNetCore.Http;
using System;

namespace OnlineShoppingStore.Utilities
{
    public class CookiesManeger
    {
        public void AddCookie(HttpContext context, string token, string value)
        {
            context.Response.Cookies.Append(token, value, getCookieOptions(context));
        }

        public bool ContainsCookie(HttpContext context, string token)
        {
            return context.Request.Cookies.ContainsKey(token);
        }

        public string GetCookieValue(HttpContext context, string token)
        {
            if (!context.Request.Cookies.TryGetValue(token, out string cookieValue))
            {
                return null;
            }
            return cookieValue;
        }

        public void RemoveCookie(HttpContext context, string token)
        {
            if (context.Request.Cookies.ContainsKey(token))
            {
                context.Response.Cookies.Delete(token);
            }
        }

        public Guid GetBrowserToken(HttpContext context)
        {
            string browserToken = GetCookieValue(context, "BrowserToken");
            if (browserToken != null)
            {
                string value = Guid.NewGuid().ToString();
                AddCookie(context, "BrowserToken", value);
                browserToken = value;
            }
            Guid guidBrowser;
            Guid.TryParse(browserToken, out guidBrowser);
            return guidBrowser;
        }

        private CookieOptions getCookieOptions(HttpContext context)
        {
            return new CookieOptions
            {
                HttpOnly = true,
                Path = context.Request.PathBase.HasValue ? context.Request.PathBase.ToString() : "/",
                Secure = context.Request.IsHttps,
                Expires = DateTime.Now.AddDays(90),
            };
        }
    }
}
