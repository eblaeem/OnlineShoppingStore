using OnlineShoppingStore.Application.Interfaces.Context;
using System.Linq;

namespace OnlineShoppingStore.Application.Services.DashboardInfo.Queries.Categories
{
    public class GetCategoriesCount : IGetCategoriesCount
    {
        private readonly IDataBaseContext _db;

        public GetCategoriesCount(IDataBaseContext db)
        {
            _db = db;
        }

        public CatCountResultDto ExecuteGetCategoriesCount()
        {
            var catCount = _db.Categories.Where(c => c.IsDeleted == false && c.ParentCategoryId == null).Count();
            return new CatCountResultDto
            {
                CatCount = catCount
            };
        }
    }
}
