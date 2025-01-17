import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bookingform',
  templateUrl: './bookingform.component.html',
  styleUrls: ['./bookingform.component.css']
})
export class BookingformComponent {
  // Model to hold booking information
  booking = {
    destination: '',
    pickupLocation: '',
    dropLocation: ''
  };

  // Array to hold passenger information
  passengers = [
    { name: '', age: null, gender: '', foodType: '' },
  ];

  // Store the selected stay type as a string
  stayTypes: string = '';  // Now a string, to hold the selected stay type

  maxPassengers: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Get the peopleCount from the query parameters
    this.route.queryParams.subscribe(params => {
      this.maxPassengers = params['peopleCount'] || 1;  // Default to 1 if not found
      // Pre-fill the number of passengers based on the maxPassengers count
      this.passengers = Array.from({ length: this.maxPassengers }, () => ({ name: '', age: null, gender: '', foodType: '' }));
    });
  }

  // Method to add a new passenger
  addPassenger() {
    this.passengers.push({ name: '', age: null, gender: '', foodType: '' });
  }

  // Method to remove a passenger by index
  removePassenger(index: number) {
    if (this.passengers.length > 1) {
      this.passengers.splice(index, 1);
    }
  }

  // Submit method (logs the data to the console)
  onSubmit() {
    // Log the booking details, passenger details, and stay types to the console
    console.log('Booking Information:', this.booking);
    console.log('Passenger Details:', this.passengers);
    console.log('Stay Type:', this.stayTypes);

    // Optional: Add a success message or further logic if needed
    alert('Form submitted! Check the console for details.');
  }
}
