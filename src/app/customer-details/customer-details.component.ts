import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef ,  MAT_DIALOG_DATA} from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationDialogComponent } from '../components/shared/confirmation-dialog/confirmation-dialog.component';
import { Icustomer } from '../model/customer.model';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  customer: Icustomer;
  
  constructor(private router: Router,private customerService: CustomerService, private activatedRoute: ActivatedRoute,
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number) {
      console.log(data+"aa rha hai dialogue data");
      this.customerService.getCustomerbyId(data).subscribe(c=>this.customer=c) ;
     }
  
    onNoClick(): void {
    this.dialogRef.close();
  }






//   constructor(private customerService : CustomerService, private activatedRoute:ActivatedRoute,@Inject(MAT_DIALOG_DATA) public data: number)) { }
//     // this.customer = this.customerService.getCustomerbyId(+activatedRoute.snapshot.params['cid']); 

//      @Inject(MAT_DIALOG_DATA) public data: number) {
//       console.log(data);
//       this.local_data = {...data};
//       this.action = this.local_data.action;
//     }    
//     console.log("CustomerIDComponentiscalled");
//     this.customerService.getCustomerbyId(+activatedRoute.snapshot.params['id']).subscribe(c=>this.customer=c)
//     console.log("subs called");
//     console.log(this.customer);
//   }

  ngOnInit() {
  }

 }



// public dialogRef: MatDialogRef<DialogBoxComponent>,
//     //@Optional() is used to prevent error if no data is passed
//     @Optional() @Inject(MAT_DIALOG_DATA) public data: UsersData) {
//     console.log(data);
//     this.local_data = {...data};
//     this.action = this.local_data.action;
//   }