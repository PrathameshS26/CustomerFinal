import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ConfirmationDialogComponent } from '../components/shared/confirmation-dialog/confirmation-dialog.component';
import { Icustomer } from '../model/customer.model';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {

  public customers:Icustomer[];

  constructor(private customerservice: CustomerService, private dialog:MatDialog, private activatedRoute: ActivatedRoute) { 
    console.log("Component method is called");
    console.log();
    this.customerservice.getAllCustomer().subscribe(data => this.customers = data);
    //console.log(this.customerservice.getAllCustomer().subscribe(data => this.customers = data));
    console.log(this.customers);
  
  }

  openDialog(): void {
    console.log("Dailog method is called");
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: "Do you confirm the deletion of this data?"
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        console.log('Yes clicked');
        // let customerid: number = this.activatedRoute.snapshot.params['id'];
        // console.log(customerid);
        // this.customerservice.deleteCustomer(customerid).subscribe(data => console.log(data));
        // DO SOMETHING
      }
    });
  }

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
