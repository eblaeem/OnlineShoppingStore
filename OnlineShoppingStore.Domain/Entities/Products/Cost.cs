﻿namespace OnlineShoppingStore.Domain.Entities.Products
{
    public class Cost
    {
        public long Id { get; set; }
        public decimal Price { get; set; }
        public long ProductId { get; set; }
        public long? StrategyId { get; set; }


        public Product Product { get; set; }
        public CostStrategy Strategy { get; set; }
    }
}
