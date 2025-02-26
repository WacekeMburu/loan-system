import { Component } from '@angular/core';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-c-client',
  templateUrl: './c-clients.component.html',
  styleUrls: ['./c-clients.component.css']
})
export class CreateCustomerComponent {

    constructor(private customersService: CustomersService) {}

    createCustomer(name: string, email: string, phone: string) {
      if (!name || !email || !phone) {
        alert('All fields are required!');
        return;
      }
      this.customersService.addCustomer({ id: 0, name, email, phone });
      alert('Customer added successfully');
    }
//   name = '';
//   email = '';
//   phone = '';

//   constructor(private customersService: CustomersService) {}

//   createCustomer() {
//     if (!this.name || !this.email || !this.phone) {
//       alert('All fields are required!');
//       return;
//     }
//     this.customersService.addCustomer({ id: 0, name: this.name, email: this.email, phone: this.phone });
//     alert('Customer added successfully');
//     this.name = this.email = this.phone = '';
//   }
}
