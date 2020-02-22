﻿using Microsoft.AspNetCore.Identity;
using STA.Core.EntityFramework;
using STA.Core.Enum;
using System;

namespace STA.User.Model.DTO
{
    public class UserBase : IdentityUser<Guid>, IBase
    {
        public DateTime? LastLoginDateTime { get; set; }
        public bool IsAdmin { get; set; }
        public bool IsBanned { get; set; }

        public string DisplayName { get; set; }
        public string About { get; set; }

        public UserStatus Status { get; set; }

        public DateTime CreateDateTime { get; set; }
        public bool IsDeleted { get; set; }
    }

    public class UserDTO : UserBase
    {
        //Foreign keys
        public UserDTO()
        {
        }
    }
}
