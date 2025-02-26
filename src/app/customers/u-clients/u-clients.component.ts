import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomersService } from 'src/app/services/customers.service';



@Component({
  selector: 'app-u-clients',
  templateUrl: './u-clients.component.html',
  styleUrls: ['./u-clients.component.css']
})
export class UClientsComponent {
  updateCustomer(name: string, email: string, phone: string): void {
    console.log('Updated Customer:', { name, email, phone });
    // Handle update logic here
  }

}
