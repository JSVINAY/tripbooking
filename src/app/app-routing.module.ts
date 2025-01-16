import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentformComponent } from './paymentform/paymentform.component';
import { PaymentsuccessComponent } from './paymentsuccess/paymentsuccess.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { HomeComponent } from './homepage/homepage.component';
import { BookingformComponent } from './bookingform/bookingform.component';

const routes: Routes = [
  { path: '', component: PaymentformComponent },  // Home route
  { path: 'payment-success', component: PaymentsuccessComponent }, // Success route
  { path: 'home', component: HomeComponent }, // Success route
  { path: 'booking', component: BookingformComponent },
  
  { path: 'about', component: AboutpageComponent }, // Success route
  { path: 'contact', component: ContactpageComponent } // Success route
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
