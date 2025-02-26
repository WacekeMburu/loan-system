import { Component, OnInit } from '@angular/core';
import { Client, ClientService } from 'src/app/services/clients.service';


@Component({
  selector: 'app-r-clients',
  templateUrl: './r-clients.component.html',
  styleUrls: ['./r-clients.component.css']
})
export class RClientsComponent implements OnInit{
  clients: Client[] = [];

  constructor(private clientService: ClientService) {}

  ngOnInit() {
    this.clients = this.clientService.getClients();
  }

  edit(id: number) {
    // Navigate to edit page
  }

  delete(id: number) {
    this.clientService.deleteClient(id);
    this.clients = this.clientService.getClients();
  }

}
