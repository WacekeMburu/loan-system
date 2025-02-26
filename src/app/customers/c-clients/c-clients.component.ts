
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService, Client } from 'src/app/services/clients.service';

@Component({
  selector: 'app-c-clients',
  standalone: true,
  templateUrl: './c-clients.component.html',
  styleUrls: ['./c-clients.component.css']
})
export class CClientsComponent {
  client: Client = { id: 0, name: '', email: '' };

  constructor(private clientService: ClientService, private router: Router) {}

  save() {
    this.clientService.addClient(this.client);
    this.router.navigate(['/customers']);
  }

}
