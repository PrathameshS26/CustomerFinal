import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-delete-customer',
  template: ``,
  styles: [`em{float:right; color: #E05c65; padding-left-10px;`]
})
export class DeleteCustomerComponent implements OnInit {

  @Input() customerId : number;

  constructor(private router: Router, private courseService: CustomerService, private activatedRoute: ActivatedRoute) {
  }


  ngOnInit(): void {
    //let customerid: number = this.activatedRoute.snapshot.params['id'];
    this.courseService.deleteCustomer(this.customerId).subscribe(data => console.log(data));
  }

}
