import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor() { }



  private storageKey = 'customers';

  getCustomers(): any[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  addCustomer(customer: any) {
    let customers = this.getCustomers();
    customer.id = customers.length ? customers[customers.length - 1].id + 1 : 1;
    customers.push(customer);
    localStorage.setItem(this.storageKey, JSON.stringify(customers));
  }

  updateCustomer(updatedCustomer: any) {
    let customers = this.getCustomers().map((cust) =>
      cust.id === updatedCustomer.id ? updatedCustomer : cust
    );
    localStorage.setItem(this.storageKey, JSON.stringify(customers));
  }

  deleteCustomer(id: number) {
    let customers = this.getCustomers().filter((cust) => cust.id !== id);
    localStorage.setItem(this.storageKey, JSON.stringify(customers));
  }
}


