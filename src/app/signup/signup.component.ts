import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  signupForm: FormGroup;
  countries = ['India', 'United States', 'Canada', 'Australia'];
  states = ['State 1', 'State 2', 'State 3', 'State 4'];

  constructor(private fb: FormBuilder) {
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
    const modal = document.getElementById('modal');
    const btn = document.getElementById('openModal');
    const closeBtn = document.getElementsByClassName('close')[0] as HTMLElement;

    btn?.addEventListener('click', () => {
      modal!.style.display = 'block';
    });

    closeBtn?.addEventListener('click', () => {
      modal!.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal!.style.display = 'none';
      }
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      alert('Registration successful!');
      this.signupForm.reset();
    } else {
      alert('Please fill out the form correctly.');
    }
  }
}

