using System.Collections.Generic;

namespace OnlineShoppingStore.Application.SiteServices.Menu.Queries
{
    public class ResponseGetMenuItems
    {
        public long CatId { get; set; }
        public string Name { get; set; }
        public IEnumerable<ResponseGetMenuItems> Child { get; set; }
    }
}
