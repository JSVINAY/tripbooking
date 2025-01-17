import { Component } from '@angular/core';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css'],
})
export class BookingsComponent {
  bookings = [
    { id: 1, name: 'John Doe', destination: 'Paris', date: '2025-01-10' },
    { id: 2, name: 'Jane Smith', destination: 'New York', date: '2025-02-15' },
  ];

  deleteBooking(id: number) {
    this.bookings = this.bookings.filter((booking) => booking.id !== id);
    alert('Booking deleted successfully!');
  }
}
