import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-bookingform',
  templateUrl: './bookingform.component.html',
  styleUrls: ['./bookingform.component.css']
})
export class BookingformComponent {
  booking = {
    destination: '',
    pickupLocation: '',
    dropLocation: '',
    govIdType: '',
    govIdNumber: ''
  };

  passengers = [
    {
      name: '',
      age: null,
      gender: '',
      foodType: ''
    }
  ];
  
  user = {
    id: localStorage.getItem('id'),
    username: localStorage.getItem('username'),
    email: localStorage.getItem('email'),
    roles: [
      {
        name: localStorage.getItem('roles'),
      }
    ]
  };


  // Store the selected stay type as a string
  stayTypes: string = '';  // Now a string, to hold the selected stay type

  maxPassengers: any;

  constructor(private route: ActivatedRoute,private apiService: ApiService,private router: Router) {}

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
  insertData(): void {
    const jsonData = {
      bookingId: 1,
      destination: this.booking.destination,
      passengers: this.passengers.map((passenger, index) => ({
        id: index + 1,
        name: passenger.name,
        age: passenger.age,
        gender: passenger.gender,
        foodType: passenger.foodType,
        govId: this.booking.govIdNumber,
        govIdType: this.booking.govIdType
      })),
      stayType: this.stayTypes.toUpperCase(),
      pickupLocation: this.booking.pickupLocation,
      dropLocation: this.booking.dropLocation,
      user: this.user
    };
    console.log(jsonData)
    this.apiService.insertBookings(jsonData).subscribe(
      response => {
        console.log('Bookings Successfull', response);
        this.router.navigate(['/']);
      },
      error => {
        alert('Booking failed');
        console.error('Booking failed', error);
      }
    );
    console.log('Prepared JSON Data:', JSON.stringify(jsonData, null, 2));
    // You can now send this JSON to your backend API
  }
}
