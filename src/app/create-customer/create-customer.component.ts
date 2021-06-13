import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormGroup, NgForm, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay, map, switchMap, tap } from 'rxjs/operators';
import { Icustomer } from '../model/customer.model';
import { Ipostal } from '../model/postal.model';
import { CustomerService } from '../service/customer.service';
// import { PostalValidator } from './postalcode.validator';

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
        postalCodeValue: ['', [Validators.required],[this.postalExistsValidator()],
        'blur'],
        cityname: [''],
        countryname: [''],
        statename: [''],
      }),
    });
  }

  isPostal:boolean
  isEnable():boolean {
      return this.isPostal
  }



  private postalExistsValidator(): AsyncValidatorFn {
    console.log("postal Exists method is called *******")
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      console.log(this.customerprofile.value + "****************")
      return of(control.value).pipe(
         delay(500),
        switchMap((postal) => this.customerService.doesPostalExist(postal).pipe(
          map(postalExists => postalExists ? { postalExists: true } : false)
        ))
      );
    };
  }

  get postalValid(){
    console.log("****getter from postValid******")
	 return	this.customerprofile.controls['postalCodeValue'];
	}



  // convenience getter for easy access to form fields
  get f() { return this.customerprofile.controls; }

  // defaultProfile() {
  //   this.customerprofile.patchValue({
  //     customerFirstName: 'Nancy',
  //     customerLastName: 'Doron',
  //     orgUnit: {
  //       orgName: 'Mango',
  //       phoneNumber: 23542435,
  //     },
  //     postal: {
  //       postalCodeValue: 123,
  //       cityname: "Mumbai",
  //       countryname: "India",
  //       statename: "Maharashtra"
  //     }
  //   });
  // }
  addCustomer(newcustomer) {
    this.customerService.addCustomer(newcustomer).subscribe(cus => this.customer = cus);
    console.log(this.customer+"Skeleton customer");
    console.log(newcustomer);
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.customerprofile.value));
    this.router.navigate(['/customers']);
    console.log(newcustomer);
  }

  // onSubmit(newCustomer) {
  //   this.submitted = true;

  //   if (this.customerprofile.invalid) {
  //       return;
  //   }
  //   console.log(newCustomer+'New Customer Created')
  //   this.customerService.addCustomer(newCustomer).subscribe(customernew => this.customer = customernew);
  //   console.log(this.customer+"Skeleton customer");
  //   alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.customerprofile.value))
  //   }
}
