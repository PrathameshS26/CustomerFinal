import { Directive } from "@angular/core";
import { AbstractControl, AsyncValidator, AsyncValidatorFn, NG_ASYNC_VALIDATORS, ValidationErrors } from "@angular/forms";
import { Observable, timer } from "rxjs";
import { switchMap, map } from 'rxjs/operators'; 
import { CustomerService } from "../service/customer.service";

export function PostalValidator(customerService : CustomerService): AsyncValidatorFn {
    console.log("***********postalValidator method is called********")
    return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
        console.log("*******Service method from PostalValidator*************"+ control.value);
        return customerService.findAllPostals()
            .pipe(
                map(customerService => {
                    const postal = customerService.find(customerService => postal.postalCode == control.value);
                    return postal?{postalExist:true}: null;
                })
            )
    }
}













// export function PostalValidator(customerService: CustomerService): AsyncValidatorFn{
// 	return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
// 		let debounceTime = 1000;
// 		return timer(debounceTime).pipe(switchMap(() => {
//             console.log("*******Postal validator fucntion in postalcode.validator");
//             console.log(control.value);
// 			return customerService.getPostalcode({"postalCodeValue" : control.value})
// 				.pipe(
// 					map(resp => {
// 						return {"postalCodeValid": resp['data'].isDuplicate }
// 					})
// 				)
// 		}
// 		))
// 	}
// }

// @Directive({
// 	selector: '[postalCodeValid][formControlName],[postalCodeValid][formControl],[postalCodeValid][ngModel]',
// 	providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: PostalValidatorDirective, multi: true}]
// })
// export class PostalValidatorDirective implements AsyncValidator {
// 	constructor(private customerService: CustomerService){
//         console.log("*******Constructor is called********")
//     }
	
// 	validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null>{
//         console.log("validator method from PostalValidatorDirective*******")
// 		return PostalValidator(this.customerService)(control);
// 	}
// }	




