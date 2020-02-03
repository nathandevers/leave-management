﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace leave_management.Models
{
  public class EmployeeVM
  {
    public string Id { get; set; }

    [Display(Name = "User Name:")]
    public string UserName { get; set; }

    [Display(Name = "Email:")]
    public string Email { get; set; }

    [Display(Name = "Phone Number:")]
    public string PhoneNumber { get; set; }

    [Display(Name = "First Name:")]
    public string Firstname { get; set; }

    [Display(Name = "Last Name:")]
    public string Lastname { get; set; }

    [Display(Name = "Tax ID Number:")]
    public string TaxId { get; set; }

    [Display(Name = "Date of Birth:")]
    public DateTime DateOfBirth { get; set; }

    [Display(Name = "Date Hired:")]
    public DateTime DateJoined { get; set; }
  }
}
