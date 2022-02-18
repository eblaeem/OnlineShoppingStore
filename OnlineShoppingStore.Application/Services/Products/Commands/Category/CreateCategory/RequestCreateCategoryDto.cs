﻿using MediatR;

namespace OnlineShoppingStore.Application.Services.Products
{
    public class RequestCreateCategoryDto:IRequest<bool>
    {
        public long? ParentId { get; set; }
        public string Name { get; set; }
    }
}
