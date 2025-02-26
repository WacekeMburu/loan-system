import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomersComponent } from './customers/customers.component';
import { CClientsComponent } from './customer/c-clients/c-clients.component';
import { DClientsComponent } from './customers/d-clients/d-clients.component';
import { UClientsComponent } from './customers/u-clients/u-clients.component';
import { RClientsComponent } from './customers/r-clients/r-clients.component';

const routes: Routes = [
{path: '', redirectTo: 'login', pathMatch: 'full'},
{path: 'login', component: LoginComponent},
{path: 'register', component: RegisterComponent},
{path: 'dashboard', component: DashboardComponent},
{path: 'customers', component: CustomersComponent,
  children: [
{path: 'r-clients', component: RClientsComponent},
{path: 'c-clients', component: CClientsComponent},
{path: 'd-clients', component: DClientsComponent},
{path: 'u-clients', component: UClientsComponent},
]
}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
