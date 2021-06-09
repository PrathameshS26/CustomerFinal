import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomertabComponent } from './customertab/customertab.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { CustomerService } from './service/customer.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';
import { ConfirmationDialogComponent } from './components/shared/confirmation-dialog/confirmation-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomertabComponent,
    CustomerlistComponent,
    DeleteCustomerComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, BrowserAnimationsModule, MatDialogModule, MatButtonModule
  ],
  entryComponents:[ ConfirmationDialogComponent],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
