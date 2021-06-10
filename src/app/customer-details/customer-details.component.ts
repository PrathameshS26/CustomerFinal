import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Icustomer } from '../model/customer.model';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  customer: Icustomer;
  constructor(private customerService : CustomerService, private activatedRoute:ActivatedRoute) { 
    // this.customer = this.customerService.getCustomerbyId(+activatedRoute.snapshot.params['cid']); 
    console.log("CustomerIDComponentiscalled");
    this.customerService.getCustomerbyId(+activatedRoute.snapshot.params['id']).subscribe(c=>this.customer=c)
    console.log("subs called");
    console.log(this.customer);
  }

  ngOnInit() {
  }

}
