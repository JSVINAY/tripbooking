import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-paymentsuccess',
  templateUrl: './paymentsuccess.component.html',
  styleUrl: './paymentsuccess.component.css'
})
export class PaymentsuccessComponent {
  
  constructor(private router: Router) {}

  // Go to the Home page
  goHome(): void {
    this.router.navigate(['/home']);
  }

  // Handle the ticket download action
  downloadTicket(): void {
    // For now, we'll simulate the ticket download action.
    // You can implement actual file download logic here.
    alert('Your ticket is being downloaded!');
    
    // Here, you could use `window.open()` or a similar method to trigger an actual file download
    // For example:
    // const link = document.createElement('a');
    // link.href = 'path_to_your_ticket_file.pdf';
    // link.download = 'ticket.pdf';
    // link.click();
  }
}

