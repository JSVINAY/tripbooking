import { Component } from '@angular/core';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css'],
})
export class DestinationsComponent {
  destinations = [
    { id: 1, name: 'Paris', price: 500, duration: 5 },
    { id: 2, name: 'New York', price: 800, duration: 7 },
  ];

  newDestination = { id: 0, name: '', price: 0, duration: 0 };

  addDestination() {
    if (this.newDestination.name && this.newDestination.price && this.newDestination.duration) {
      this.newDestination.id = this.destinations.length + 1;
      this.destinations.push({ ...this.newDestination });
      this.newDestination = { id: 0, name: '', price: 0, duration: 0 };
      alert('Destination added successfully!');
    } else {
      alert('Please fill in all fields.');
    }
  }

  deleteDestination(id: number) {
    this.destinations = this.destinations.filter((dest) => dest.id !== id);
    alert('Destination deleted successfully!');
  }
}
