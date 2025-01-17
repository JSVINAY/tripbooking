
import { Component } from '@angular/core';
import { Router } from '@angular/router'; // To navigate to success page
import { HttpClient } from '@angular/common/http'; 
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
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

  constructor(private router: Router, private http: HttpClient) {}
  handleSubmit(): void {
    if (this.cardNumber && this.expiryDate && this.cvv) {
      const paymentData = {
        cardNumber: this.cardNumber,
        expiryDate: this.expiryDate,
        cvv: this.cvv,
        paymentMethod: this.selectedPaymentMethod,
      };

      // Hardcoded backend API URL (no use of environment)
      const apiUrl = 'http://localhost:8080/api/payment/makepayment'; // Update this URL if needed

      this.http.post(apiUrl, paymentData, {responseType:'text',}).pipe(
        catchError((error) => {
          console.log(error);
          alert('Payment failed. Please try again.');
          return of(null); // Return an empty observable in case of an error
        })
      ).subscribe({
        next: (response: any) => {
          if (response) {
            // Handle the response from the backend
            alert('Payment processed successfully');
            this.router.navigate(['/payment-success']);
          }
        },
        error: (err) => {
          console.error('Error during payment', err); // You can handle errors more gracefully here
        }
      });
    } else {
      alert('Please fill in all fields.');
    }
  }

  // Handle radio button changes for payment method
  onPaymentMethodChange(paymentMethod: string): void {
    this.selectedPaymentMethod = paymentMethod;
  }
}