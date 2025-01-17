import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentformComponent } from './paymentform/paymentform.component';
import { PaymentsuccessComponent } from './paymentsuccess/paymentsuccess.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { TermsComponent } from './terms/terms.component';
import { PoliciesComponent } from './policies/policies.component';
import { HomeComponent } from './homepage/homepage.component';
import { BookingformComponent } from './bookingform/bookingform.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    PaymentformComponent,
    PaymentsuccessComponent,
    HeaderComponent,
    FooterComponent,
    AboutpageComponent,
    ContactpageComponent,
    TermsComponent,
    PoliciesComponent,
    HomeComponent,
    BookingformComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
