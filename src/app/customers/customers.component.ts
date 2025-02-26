import { Component } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {
  selectedOperation: string = '';

  selectOperation(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedOperation = target.value;
  }
}
