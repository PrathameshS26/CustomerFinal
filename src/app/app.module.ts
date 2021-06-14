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
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRadioModule,
  MatSelectModule,
  MatOptionModule,
  MatSlideToggleModule,
} from '@angular/material';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { Error404Component } from './error404/error404.component';



@NgModule({
  declarations: [
    AppComponent,
    CustomertabComponent,
    CustomerlistComponent,
    DeleteCustomerComponent,
    ConfirmationDialogComponent,
    CreateCustomerComponent,
    UpdateCustomerComponent,
    CustomerDetailsComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule, 
    HttpClientModule, 
    BrowserModule,      
    FormsModule,      
    ReactiveFormsModule,      
    MatButtonModule,      
    MatMenuModule,      
    MatToolbarModule,      
    MatIconModule,      
    MatCardModule,      
    BrowserAnimationsModule,      
    MatFormFieldModule,      
    MatInputModule,      
    MatDatepickerModule,      
    MatNativeDateModule,      
    MatRadioModule,      
    MatSelectModule,      
    MatOptionModule,      
    MatSlideToggleModule, MatDialogModule 
  ],
  exports: [
    MatButtonModule,
		MatMenuModule,
		MatToolbarModule,
		MatIconModule,
		MatCardModule,
		BrowserAnimationsModule,
		MatFormFieldModule,
		MatInputModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatRadioModule,
		MatSelectModule,
		MatOptionModule,
		MatSlideToggleModule
  ],
  entryComponents:[ ConfirmationDialogComponent, CustomerDetailsComponent ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
