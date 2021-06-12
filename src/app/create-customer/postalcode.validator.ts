import { Directive } from "@angular/core";
import { AbstractControl, AsyncValidator, AsyncValidatorFn, NG_ASYNC_VALIDATORS, ValidationErrors } from "@angular/forms";
import { Observable, timer } from "rxjs";
import { switchMap, map } from 'rxjs/operators'; 
import { CustomerService } from "../service/customer.service";

export function PostalCodeValidator(customerService: CustomerService): AsyncValidatorFn{
	return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
		let debounceTime = 1000;
		return timer(debounceTime).pipe(switchMap(() => {
			return customerService.post('http://localhost:8081/user/email-check',{"email" : control.value})
				.pipe(
                    map(resp => {
						return {"duplicateEmail": resp['data'].isDuplicate }
					})
				)
		}
		))
	}
}


@Directive({
	selector: '[postalCodeValidate][formControlName],[postalCodeValidate][formControl],[postalCodeValidate][ngModel]',
	providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: PostalCodeValidatorDirective, multi: true}]
})
export class PostalCodeValidatorDirective implements AsyncValidator {
	constructor(private customerService: CustomerService){}
	
	validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null>{
		return PostalCodeValidator(this.customerService)(control);
	}
}	
