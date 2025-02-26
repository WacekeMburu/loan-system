import { Component, OnInit } from '@angular/core';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-r-clients',
  templateUrl: './r-clients.component.html',
  styleUrls: ['./r-clients.component.css']
})
export class RClientsComponent implements OnInit{
  customersName: string= '';
customers: any;

  constructor(private customersService: CustomersService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

createCustomer(): void {
  console.log('Customer Created:', this.customersName);
}

  

}


