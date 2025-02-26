import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomersComponent } from './customers/customers.component';
import { CClientsComponent } from './customer/c-clients/c-clients.component';
import { RClientsComponent } from './customers/r-clients/r-clients.component';
import { UClientsComponent } from './customers/u-clients/u-clients.component';
import { DClientsComponent } from './customers/d-clients/d-clients.component';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    CustomersComponent,
    CClientsComponent,
    RClientsComponent,
    UClientsComponent,
    DClientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
