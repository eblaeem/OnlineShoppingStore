using MediatR;
using OnlineShoppingStore.Application.Interfaces.Context;
using OnlineShoppingStore.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Application.AdminServices.HomePage.Handlers.DeleteImageFromSlider
{
    public class DeleteImageFromSliderHandler : IRequestHandler<RequestDeleteImageFromSlider, bool>
    {
        private readonly IDataBaseContext _db;

        public DeleteImageFromSliderHandler(IDataBaseContext db)
        {
            _db = db;
        }
        public async Task<bool> Handle(RequestDeleteImageFromSlider request, CancellationToken cancellationToken)
        {
            var sliderImage =await _db.MainSliders.FindAsync(request.SliderImageId);
            if (sliderImage == null)
            {
                return false;
            }
            sliderImage.IsDeleted = true;
            sliderImage.DeletedTime = DateTime.Now;
            _db.SaveChanges();
            return true;
        }
    }
}
