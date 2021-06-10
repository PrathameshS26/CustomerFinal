import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';

const routes: Routes = [

  { path: "customers", component: CustomerlistComponent },
  { path: "createcustomer", component: CreateCustomerComponent },
  { path: "customerdetails/:id", component:  CustomerDetailsComponent },
  { path: "updatecustomer/:id", component:  UpdateCustomerComponent },
  { path: "deletecustomer/:id", component:  DeleteCustomerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
