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
  
  customerprofile : FormGroup;
  customer : Icustomer;
  

  constructor(private form: FormBuilder, private router: Router,private activatedRoute: ActivatedRoute, private customerService: CustomerService) { 
  
  }
  defaultPage(){
    this.router.navigate(['/customers']);
  }
  // displayCustomer(){
  //   console.log('******Display method called*******');
  //   console.log(this.customer.postal.postalCodeValue);
  //}
  updateCustomer(newCustomer) {
    console.log("*******")
      console.log(newCustomer)
      console.log("*******")
      this.customerService.updateCustomer(newCustomer).subscribe(customernew => this.customer = customernew);
      console.log(this.customer);
      console.log(newCustomer)
      alert('UPDATED!! :-)\n\n' + JSON.stringify(this.customerprofile.value));
      this.router.navigate(['/customers'])
    
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
        postalCodeValue: ['', [Validators.required]],
        cityname: [''],
        countryname: [''],
        statename: [''],
      }),
    });
    
    this.customerService.getCustomerbyId(+this.activatedRoute.snapshot.params['id']).subscribe(cus => this.customer = cus);
    console.log('ngonit console update customer id');
    console.log(this.activatedRoute.snapshot.params['id']);
    console.log('Customer object'+this.customer);

    this.customerprofile.setValue(this.customer);

    
  }
  

  

    
  
}
