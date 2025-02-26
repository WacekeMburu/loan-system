// src/app/customer/client.service.ts
import { Injectable } from '@angular/core';

export interface Client {
  id: number;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private clients: Client[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
  ];
  private nextId = 2;

  getClients(): Client[] {
    return [...this.clients];
  }

  getClient(id: number): Client | undefined {
    return this.clients.find(client => client.id === id);
  }

  addClient(client: Client): void {
    client.id = this.nextId++;
    this.clients.push(client);
  }

  updateClient(updatedClient: Client): void {
    const index = this.clients.findIndex(client => client.id === updatedClient.id);
    if (index !== -1) this.clients[index] = updatedClient;
  }

  deleteClient(id: number): void {
    this.clients = this.clients.filter(client => client.id !== id);
  }
}
