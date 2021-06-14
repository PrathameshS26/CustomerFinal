import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationDialogComponent } from '../components/shared/confirmation-dialog/confirmation-dialog.component';
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';
import { Icustomer } from '../model/customer.model';
import { CustomerService } from '../service/customer.service';
import { UpdateCustomerComponent } from '../update-customer/update-customer.component';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {

  public customers:Icustomer[];
  private errorMessage;
  constructor(private customerservice: CustomerService,private router : Router, private dialog:MatDialog, private activatedRoute: ActivatedRoute) { 
    console.log("Component method is called");
    console.log();
    this.customerservice.getAllCustomer().subscribe((data) => {this.customers = data},(error)=>{this.errorMessage=error});
    //console.log(this.customerservice.getAllCustomer().subscribe(data => this.customers = data));
    console.log(this.customers);
  
  }

  openDialog(cid): void {
    console.log("Dailog method is called");
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: "Do you confirm the deletion of this data?"
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        console.log('Yes clicked');
        console.log(cid);
        // this.router.navigateByUrl("/deletecustomer/"+cid)
        this.customerservice.deleteCustomer(cid).subscribe(data => console.log(data));
         this.router.navigateByUrl("/customers");
      }
    });
  }






  getCustomer(cid): void {
    // const dialogConfig = new MatDialogConfig();

    // dialogConfig.data = {
    //     customerID: cid
      
    // };
    
    // const dialogSubTaskRef = this.dialog.open(CustomerDetailsComponent,{},);


    console.log("Dailog method is called");
    const dialogRef = this.dialog.open(CustomerDetailsComponent,{
      width: '450px', height:'500px',
      data:cid,
    });
    console.log(cid);
        this.customerservice.getCustomerbyId(cid).subscribe(data => console.log(data));
  }

  // getCustomer(cid){
  //   console.log('getCustomer method called');
  //   console.log(cid);
  //   this.router.navigateByUrl("/customerdetails/"+cid)

  // }

  updateCustomer(cid)
  {
    console.log("customer list first step")
    console.log(cid);
    this.router.navigateByUrl("/updatecustomer/"+cid)
  }

  // openForm(): void {
  //   console.log("Dailog method is called");
  //   const dialogRef = this.dialog.open(UpdateCustomerComponent, {
  //     width: '350px',
  //     data: "Do you confirm the deletion of this data?"
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     if(result) {
  //       console.log('Yes clicked');
  //       // let customerid: number = this.activatedRoute.snapshot.params['id'];
  //       // console.log(customerid);
  //       // this.customerservice.deleteCustomer(customerid).subscribe(data => console.log(data));
  //       // DO SOMETHING
  //     }
  //   });
  // }

  ngOnInit(): void {
   
  }

  customerDelete()
  {
    alert("Are you sure u eant to delete it")
  }

  // customerDelete()
  // {
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.autoFocus = true;
  //   dialogConfig.disableClose = true;
  //   dialogConfig.width = "20%";
  //   dialogConfig.height = "20%";
  //   dialogConfig.data = "Hello World";
  //   this.dailog.open(CustomerlistComponent,dialogConfig );
  // }




}
