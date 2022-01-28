namespace OnlineShoppingStore.Domain.Entities.Products
{
    public class StrategyRequirement
    {
        public long Id { get; set; }
        public long ProductPropertyId { get; set; }
        public long CostStrategyId { get; set; }



        public virtual CostStrategy CostStrategy { get; set; }
    }


}
