using MediatR;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using OnlineShoppingStore.Application.Interfaces.Context;
using OnlineShoppingStore.Application.Services.Products.Handlers.CreateProduct;
using OnlineShoppingStore.Domain.Entities.HomePage.MainSlider;
using System;
using System.IO;
using System.Threading;
using System.Threading.Tasks;

namespace OnlineShoppingStore.Application.AdminServices.HomePage.Handlers.CreateSlider
{
    public class CreateSliderHandler : IRequestHandler<RequestCreateSlider, bool>
    {
        private readonly IDataBaseContext _db;
        private readonly IHostingEnvironment _environment;

        public CreateSliderHandler(IDataBaseContext db, IHostingEnvironment environment)
        {
            _db = db;
            _environment = environment;
        }
        public async Task<bool> Handle(RequestCreateSlider request, CancellationToken cancellationToken)
        {
            var resultUpload = UploadFile(request.File);

            MainSlider mainSlider = new()
            {
                Link = request.Link,
                Src = resultUpload.FileNameAddress,
                Title = request.Title,
                PreTitle = request.PreTitle,
                Paragraph =request.Paragraph,
                DisplayIn = request.LocationEnum
            }; 

            _db.MainSliders.Add(mainSlider);
           await _db.SaveChangesAsync(cancellationToken);

            return true;
        }

        private UploadDto UploadFile(IFormFile file)
        {
            if (file != null)
            {
                string folder = $@"img\HomePages\MainSlider\";
                var uploadsRootFolder = Path.Combine(_environment.WebRootPath, folder);
                if (!Directory.Exists(uploadsRootFolder))
                {
                    Directory.CreateDirectory(uploadsRootFolder);
                }


                if (file == null || file.Length == 0)
                {
                    return new UploadDto()
                    {
                        Status = false,
                        FileNameAddress = "",
                    };
                }

                string fileName = DateTime.Now.Ticks.ToString() + file.FileName;
                var filePath = Path.Combine(uploadsRootFolder, fileName);
                using (var fileStream = new FileStream(filePath, FileMode.Create))
                {
                    file.CopyTo(fileStream);
                }

                return new UploadDto()
                {
                    FileNameAddress = folder + fileName,
                    Status = true,
                };
            }
            return null;
        }

    }
}
