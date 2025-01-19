import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  countries = ['India', 'United States', 'Canada', 'Australia'];
  states = ['State 1', 'State 2', 'State 3', 'State 4'];

  constructor(private fb: FormBuilder,private apiService: ApiService,private router: Router) {
    // Initialize the form group with form controls and validators
    this.signupForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      Password: ['', Validators.required],
      gender: ['', Validators.required],
      address: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      postalCode: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Modal display functionality (non-Angular way)
    const modal = document.getElementById('modal');
    const btn = document.getElementById('openModal');
    const closeBtn = document.getElementsByClassName('close')[0] as HTMLElement;

    // Open modal when the 'openModal' button is clicked
    btn?.addEventListener('click', () => {
      modal!.style.display = 'block';
    });

    // Close modal when the close button is clicked
    closeBtn?.addEventListener('click', () => {
      modal!.style.display = 'none';
    });

    // Close modal if clicked outside the modal content
    window.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal!.style.display = 'none';
      }
    });
  }

  // Handle form submission
  onSubmit() {
    // if (this.signupForm.valid) {
    //   console.log('Sign Up successful:', this.signupForm.value);
    //   alert('Sign Up successful!');
    //   this.signupForm.reset(); // Reset the form after submission
    // } else {
    //   alert('Please fill out the form correctly.');
    // }
  }
  signUpData() {
    // Prepare JSON object
    const formValues = this.signupForm.value;
    const signupData = {
      username: formValues.fullName,
      password: formValues.Password, // Replace this with a dynamic or default value if required
      role: ['ROLE_USER'],
      email: formValues.email,
      phonenumber: formValues.phoneNumber,
      gender: formValues.gender,
      address: formValues.address,
      state: formValues.state,
      country: formValues.country,
      postalcode: formValues.postalCode,
    };
    console.log(signupData);
    this.apiService.signupDataForm(signupData).subscribe(
      response => {
        alert('Signup successful');
        console.log('Signup successful', response);
        this.router.navigate(['/']);
      },
      error => {
        alert('Please fill out all fields correctly.');
        console.error('Signup failed', error);
      }
    );
}
}