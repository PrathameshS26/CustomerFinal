import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef ,  MAT_DIALOG_DATA} from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent  {

  constructor(private router: Router,private courseService: CustomerService, private activatedRoute: ActivatedRoute,
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string) { }
  
    onNoClick(): void {
    this.dialogRef.close();
  }

}
