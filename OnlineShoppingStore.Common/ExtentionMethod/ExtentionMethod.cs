using System;
using System.Globalization;
using System.Threading;

namespace OnlineShoppingStore.Common
{
    public static class ExtentionMethod
    {
        public static string ToshamsiDate(this DateTime date)
        {
            CultureInfo info = new("fa-Ir");
            info.DateTimeFormat.Calendar = new PersianCalendar();
            Thread.CurrentThread.CurrentCulture = info;
            var str = date.ToString("yyyy/MM/dd HH:mm:ss");
            return str;
        }
    }
}
