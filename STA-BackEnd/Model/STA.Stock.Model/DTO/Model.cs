﻿using STA.Core.EntityFramework;
using System;
using System.Collections.Generic;

namespace STA.Stock.Model.DTO
{
    public class ModelBase : Table
    {
        public string Name { get; set; }
        public Guid BrandId { get; set; }
        public string PictureId { get; set; }
    }

    public class Model : ModelBase
    {


        //Foreign Keys...
        public virtual Brand Brand { get; set; }

        public virtual ICollection<Product> Products { get; set; }

        public Model()
        {
            Products = new HashSet<Product>();
        }
    }
}
