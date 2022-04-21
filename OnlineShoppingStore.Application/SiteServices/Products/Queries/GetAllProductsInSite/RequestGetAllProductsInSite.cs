using MediatR;

namespace OnlineShoppingStore.Application.SiteServices.Products.Queries.GetAllProductsInSite
{
    public class RequestGetAllProductsInSite:IRequest<ResponseGetAllProductsInSiteDto>
    {
        public int Page { get; set; }
        public long? CatId { get; set; }
        public string SearchKey { get; set; }
        public int PageSize { get; set; }
        public OrderingEnum Ordering { get; set; }
    }

    public enum OrderingEnum
    {
        NoOrder = 0,
        /// <summary>
        /// بیشترین بازدید
        /// </summary>
        MostVisited = 1,
        /// <summary>
        /// پرفروشترین
        /// </summary>
        BestSelling = 2,
        /// <summary>
        /// محبوبترین
        /// </summary>
        MostLikes = 3,
        /// <summary>
        /// جدیدترین
        /// </summary>
        TheNewest = 4,
        /// <summary>
        /// ارزانترین
        /// </summary>
        LowestPrice = 5,
        /// <summary>
        /// گرانترین
        /// </summary>
        HighestPrice = 6
    }
}
