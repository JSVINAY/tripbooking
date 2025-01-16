import { Component } from '@angular/core';
import { Router } from '@angular/router'; // To navigate to success page
import { HttpClient } from '@angular/common/http'; // To send HTTP requests
@Component({
  selector: 'app-paymentform',
  templateUrl: './paymentform.component.html',
  styleUrl: './paymentform.component.css'
})
export class PaymentformComponent {
  cardNumber: string = '4111 1111 1111 1111'; // Default card number (this could be left empty initially)
  expiryDate: string = '';
  cvv: string = '';
  isPaymentSuccessful: boolean = false;
  selectedPaymentMethod: string = 'creditCard'; // Default selection for payment method

  constructor(public router: Router) {}

  handleSubmit(): void {
    if (this.cardNumber && this.expiryDate && this.cvv) {
      alert('Processing payment...');
      this.isPaymentSuccessful = true;
      

      // Simulate payment processing delay
      setTimeout(() => {
        // Navigate to the 'payment-success' page after successful payment
        this.router.navigate(['/payment-success']);
      }, 1000); // Simulate a delay before redirecting
    } else {
      alert('Please fill in all fields.');
    }
  }

  // Handle radio button changes for payment method
  onPaymentMethodChange(paymentMethod: string): void {
    this.selectedPaymentMethod = paymentMethod;
  }
}

