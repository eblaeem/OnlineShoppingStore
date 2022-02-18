﻿using MediatR;
using Microsoft.AspNetCore.Mvc;
using OnlineShoppingStore.Application.Services.DashboardInfo.Queries.Categories;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Areas.Admin.Views.Home.Components.GetCategoriesCount
{
    public class GetCategoriesCount : ViewComponent
    {
        private readonly IMediator _mediator;

        public GetCategoriesCount(IMediator mediator)
        {
            _mediator = mediator;
        }
        public async Task<IViewComponentResult> InvokeAsync()
        {
            return await Task.Run(() => View(_mediator.Send(new RequestCategoryCountDto())));
        }
    }
}
