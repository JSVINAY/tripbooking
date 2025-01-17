import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isModalOpen = true; // Open the modal automatically when the component initializes

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]], // Email is required and must be valid
      password: ['', Validators.required], // Password is required
    });
  }

  ngOnInit(): void {
    // No need for openModal() since it's now automatically opened
  }

  closeModal() {
    this.isModalOpen = false;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Login successful:', this.loginForm.value);
      alert('Login successful!');
      this.closeModal();
      this.loginForm.reset();
    } else {
      alert('Please fill out all fields correctly.');
    }
  }
}
