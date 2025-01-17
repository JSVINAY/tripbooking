import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentformComponent } from './paymentform/paymentform.component';
import { PaymentsuccessComponent } from './paymentsuccess/paymentsuccess.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';

const routes: Routes = [
  { path: 'paymentform', component: PaymentformComponent }, // payment route
  { path: 'payment-success', component: PaymentsuccessComponent }, // Success route
  { path: 'about', component: AboutpageComponent }, // Success route
  { path: 'contact', component: ContactpageComponent }, // Success route
  { path: 'signup', component: SignupComponent}, //Signup route
  { path: 'login', component: LoginComponent}, //login route
  { path: 'forgotpassword', component: ForgotpasswordComponent} //forgot password route
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
