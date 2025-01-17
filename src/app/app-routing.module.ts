import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentformComponent } from './paymentform/paymentform.component';
import { PaymentsuccessComponent } from './paymentsuccess/paymentsuccess.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { HomeComponent } from './homepage/homepage.component';
import { BookingformComponent } from './bookingform/bookingform.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PoliciesComponent } from './policies/policies.component';
import { TermsComponent } from './terms/terms.component';
import { AdminComponent } from './admin/admin.component';
import { BookingsComponent } from './bookings/bookings.component';
import { DestinationsComponent } from './destinations/destinations.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'payment', component: PaymentformComponent },  // Home route
  { path: 'payment-success', component: PaymentsuccessComponent }, // Success route
  { path: 'home', component: HomeComponent },
 // Success route
  { path: 'booking', component: BookingformComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'policies', component: PoliciesComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'bookings', component: BookingsComponent },
  { path: 'destinations', component: DestinationsComponent },
  { path: '', redirectTo: '/admin', pathMatch: 'full' },

  
  { path: 'about', component: AboutpageComponent }, // Success route
  { path: 'contact', component: ContactpageComponent } ,// Success route

  { path: 'component2/:data', component: LoginComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
