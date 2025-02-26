import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-d-clients',
  templateUrl: './d-clients.component.html',
  styleUrls: ['./d-clients.component.css']
})
export class DClientsComponent {
  clientId!: number;

  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.clientId = Number(this.route.snapshot.paramMap.get('id'));
  }

  delete() {
    this.clientService.deleteClient(this.clientId);
    this.router.navigate(['/customers']);
  }

}
