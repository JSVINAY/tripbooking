// home.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Corrected import for Router

@Component({
  selector: 'app-home',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomeComponent {
  selectedTrip: any = null;
  peopleCount: number = 1;  // Default to 1 person

  trips = [
    {
      destination: 'Manali',
      image: 'https://images.unsplash.com/photo-1712388430474-ace0c16051e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuYWxpfGVufDB8fDB8fHww',
      price: 1500,
      duration: 7,
      startDate: '2025-06-01',
    },
    {
      destination: 'Jaipur',
      image: 'https://plus.unsplash.com/premium_photo-1661963054563-ce928e477ff3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amFpcHVyfGVufDB8fDB8fHww',
      price: 1200,
      duration: 5,
      startDate: '2025-07-15',
    },
    {
      destination: 'Alleppy',
      image: 'https://media.istockphoto.com/id/481916851/photo/house-boat-in-backwaters.webp?a=1&b=1&s=612x612&w=0&k=20&c=u48arVCLopMWAIUmxWWiafLbMWCB95CNihqGMYoFDgQ=',
      price: 1800,
      duration: 10,
      startDate: '2025-08-20',
    },
    {
      destination: 'Goa',
      image: 'https://plus.unsplash.com/premium_photo-1697730411634-5313371ad8fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z29hfGVufDB8fDB8fHww',
      price: 1400,
      duration: 6,
      startDate: '2025-09-10',
    },
    {
      destination: 'Ayodhya',
      image: 'https://plus.unsplash.com/premium_photo-1697730447144-a2f7257e4a1f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXlvZGh5YXxlbnwwfHwwfHx8MA%3D%3D',
      price: 1600,
      duration: 8,
      startDate: '2025-10-05',
    },
    {
      destination: 'Kumbh Mela',
      image: 'https://media.istockphoto.com/id/477260677/photo/kumbh-mela-the-worlds-largest-religious-gathering.jpg?s=612x612&w=0&k=20&c=2tFCubsuTQIlY9Zeck2DImEYRQWOy9eSTZcS5Ji2bNs=',
      price: 1100,
      duration: 5,
      startDate: '2025-12-01',
    }
  ];

  route: any;

  openModal(trip: any) {
    this.selectedTrip = trip;
  }

  closeModal() {
    // Pass peopleCount to the booking page
    this.route.navigate(['/booking'], { queryParams: { peopleCount: this.peopleCount } });
  }

  // Calculate the total price based on number of people
  calculateTotalPrice(): number {
    return this.selectedTrip.price * this.peopleCount;
  }
}
