import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  countries = ['India', 'United States', 'Canada', 'Australia'];
  states = ['State 1', 'State 2', 'State 3', 'State 4'];

  constructor(private fb: FormBuilder) {
    // Initialize the form group with form controls and validators
    this.signupForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      contactNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      dob: ['', Validators.required],
      address: ['', [Validators.required, Validators.minLength(10)]],
      country: ['', Validators.required],
      state: ['', Validators.required],
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
    if (this.signupForm.valid) {
      console.log('Sign Up successful:', this.signupForm.value);
      alert('Sign Up successful!');
      this.signupForm.reset(); // Reset the form after submission
    } else {
      alert('Please fill out the form correctly.');
    }
  }
}
