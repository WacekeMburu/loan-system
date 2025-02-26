import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-d-clients',
  templateUrl: './d-clients.component.html',
  styleUrls: ['./d-clients.component.css']
})
export class DClientsComponent implements OnInit{
  id!: number;

  constructor(private route: ActivatedRoute, private customersService: CustomersService, private router: Router) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  deleteCustomer() {
    this.customersService.deleteCustomer(this.id);
    alert('Customer deleted successfully');
    this.router.navigate(['/read']);
  }



}
