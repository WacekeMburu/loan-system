import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client, ClientService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-u-clients',
  templateUrl: './u-clients.component.html',
  styleUrls: ['./u-clients.component.css']
})
export class UClientsComponent implements OnInit{
  client!: Client;

  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.client = { ...this.clientService.getClient(id)! };
  }

  save() {
    this.clientService.updateClient(this.client);
    this.router.navigate(['/customers']);
  }

}
