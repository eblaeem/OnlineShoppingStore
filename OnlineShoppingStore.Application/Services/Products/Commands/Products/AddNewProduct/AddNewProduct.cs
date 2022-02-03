
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using OnlineShoppingStore.Application.Interfaces.Context;
using OnlineShoppingStore.Common.ResultDto;
using OnlineShoppingStore.Domain.Entities.Products;
using System;
using System.Collections.Generic;
using System.IO;

namespace OnlineShoppingStore.Application.Services.Products.Commands.Products
{
    public class AddNewProduct : IAddNewProduct
    {
        private readonly IDataBaseContext _db;
        private readonly IHostingEnvironment _environment;

        public AddNewProduct(IDataBaseContext db, IHostingEnvironment environment)
        {
            _db = db;
            _environment = environment;
        }

        public ResultDto ExecuteAddNewProduct(RequestAddNewProdductDto request)
        {
            try
            {
                var cat = _db.Categories.Find(request.CategoryId);

                Product product = new()
                {
                    Name = request.Name,
                    Quantity = request.Quantity,
                    Displayed = request.Displayed,
                };
                //product.ProductProperties = request.ProductProperties;
                _db.Products.Add(product);

                Cost cost = new()
                {
                    Price = request.Price,
                    Product = product
                };
                _db.Costs.Add(cost);

                List<Image> images = new();
                foreach (var item in request.Images)
                {
                    var uploadResult = UploadFile(item);
                    images.Add(new Image
                    {
                        Product = product,
                        Src = uploadResult.FileNameAddress
                    });
                }
                _db.Images.AddRange(images);

                //List<ProductProperty> properties = new();
                //foreach (var item in request.ProductProperties)
                //{
                //    properties.Add(new ProductProperty
                //    {
                //        Product = product,
                //        Value = item.Value
                //    });
                //}
                //_db.ProductProperties.AddRange(properties);

                _db.SaveChanges();

                return new ResultDto
                {
                    IsSuccess = true,
                    Message = "افزودن محصول با موفقیت انجام شد."
                };
                
            }
            catch (System.Exception)
            {
                return new ResultDto
                {
                    IsSuccess = false,
                    Message = "در افزودن محصول خطایی رخ داده است."
                };
            }
        }

        private UploadDto UploadFile(IFormFile file)
        {
            if (file != null)
            {
                string folder = $@"img\ProductImages\";
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
