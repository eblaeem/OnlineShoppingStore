using System;
using System.Globalization;
using System.Threading;

namespace OnlineShoppingStore.Common
{
    public static class ExtentionMethod
    {
        public static string ToshamsiDate(this DateTime date)
        {
            CultureInfo info = new("fa-IR");
            info.DateTimeFormat.Calendar = new PersianCalendar();
            Thread.CurrentThread.CurrentCulture = info;
            var str = date.ToString("HH:mm:ss yyyy/MM/dd");
            return str;
        }
    }
}
