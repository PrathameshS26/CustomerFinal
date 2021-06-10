import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { pipe } from 'rxjs';
import { Icustomer } from '../model/customer.model';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent  {
  cid : number;
  //customer: Icustomer = {customerId : 0,customerFirstName: '', customerLastName: '', orgUnit: {orgName: '', phoneNumber : 0},postal: {postalCodeValue: 0, cityname: '',countryname: '',statename: ''}};
  customer : Icustomer;
  customerprofile : FormGroup;
  // submitted : boolean = false;

  constructor(private form: FormBuilder, private router: Router,private activatedRoute: ActivatedRoute, private customerService: CustomerService) { 
   // this.customerService.getCustomerbyId(+this.activatedRoute.snapshot.params['id']).subscribe(customerOne => this.customer = customerOne);
    // console.log("constructor is called");
    // console.log(this.customer.customerId);
  }

  ngOnInit(): void {
  
    this.customerprofile = this.form.group({
      customerId:[''],
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
    
    this.customerService.getCustomerbyId(+this.activatedRoute.snapshot.params['id']).subscribe(cus => this.customer = cus);


    this.customerprofile.setValue(this.customer);

    
    // this.customerprofile.patchValue({
    //   customerId:this.customer.customerId,
    //   customerFirstName: this.customer.customerFirstName,
    //   customerLastName: this.customer.customerLastName,
    //   orgUnit: {
    //     orgName: this.customer.orgUnit.orgName,
    //     phoneNumber: this.customer.orgUnit.phoneNumber,
    //   },
    //   postal: {
    //     postalCodeValue: this.customer.postal.postalCodeValue,
    //     cityname: this.customer.postal.cityname,
    //     countryname: this.customer.postal.countryname,
    //     statename: this.customer.postal.statename
    //   }
    // });
  }
  // ngOnInit(): void {
    
  //   console.log("Update form is pre filled");

  

    
  //   console.log("Ng On init is called");
  //   console.log(this.customer.customerId);

  // }

  // convenience getter for easy access to form fields
  // get f() { return this.customerprofile.controls; }

  // updateCourse(customer){
  //   this.customerService.updateCustomer(customer).subscribe(pipe());
  // }

  // onSubmit() {
  //   this.submitted = true;

  //   if (this.customerprofile.invalid) {
  //       return;
  //   }

  //   this.customerService.addCustomer(this.customerprofile.value).subscribe(customernew => this.customer = customernew);

  //   alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.customerprofile.value))
  //   }
}
