using MediatR;
using OnlineShoppingStore.Application.Interfaces.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Application.AdminServices.HomePage.Handlers.ChangeVisibility
{
    public class ChangeVisibilityHandler : IRequestHandler<RequestChangeVisibility, bool>
    {
        private readonly IDataBaseContext _db;

        public ChangeVisibilityHandler(IDataBaseContext db)
        {
            _db = db;
        }
        public async Task<bool> Handle(RequestChangeVisibility request, CancellationToken cancellationToken)
        {
            var image =await _db.MainSliders.FindAsync(request.Id);
            if (image == null)
            {
                return false;
            }
            image.IsVisibility = true;
            image.UpdateTime = DateTime.Now;
            _db.SaveChanges();
            return true;
        }
    }

    public class RequestChangeVisibility:IRequest<bool>
    {
        public long Id { get; set; }
    }

}
