import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Icustomer } from '../model/customer.model';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent  {

  customer: Icustomer = {customerFirstName: '', customerLastName: '', orgUnit: {orgName: '', phoneNumber : 0},postal: {postalCodeValue: 0, cityname: '',countryname: '',statename: ''}};

  customerprofile : FormGroup;
  submitted : boolean = false;

  constructor(private form: FormBuilder, private router: Router, private customerService: CustomerService) { }
  ngOnInit(): void {
    this.customerprofile = this.form.group({
      customerFirstName: ['', Validators.required],
      customerLastName: ['',Validators.required],
      orgUnit: this.form.group({
        orgName: ['', Validators.required],
        phoneNumber: ['',  Validators.required]
      }),
      postal: this.form.group({
        postalCodeValue: ['', [Validators.required, Validators.pattern('[0-9]{3}')]],
        cityname: [''],
        countryname: [''],
        statename: [''],
      }),
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.customerprofile.controls; }

  defaultProfile() {
    this.customerprofile.patchValue({
      customerFirstName: 'Nancy',
      customerLastName: 'Doron',
      orgUnit: {
        orgName: 'Mango',
        phoneNumber: 23542435,
      },
      postal: {
        postalCodeValue: 123,
        cityname: "Mumbai",
        countryname: "India",
        statename: "Maharashtra"
      }
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.customerprofile.invalid) {
        return;
    }

    this.customerService.addCustomer(this.customerprofile.value).subscribe(customernew => this.customer = customernew);

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.customerprofile.value))
    }
}
