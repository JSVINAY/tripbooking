import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isModalOpen = true; // Open the modal automatically when the component initializes
  

  constructor(private fb: FormBuilder,private apiService: ApiService,private router: Router) {
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
      // alert('Please fill out all fields correctly.');
    }
  }
  prepareLoginData(): void {
     console.log("Reach")
      const loginData = {
        username: this.loginForm.value.username,
        password: this.loginForm.value.password
      };
      this.apiService.postData(loginData).subscribe(
        async response => {
          console.log('Login successful', response);
          const { accessToken, tokenType, id, username, email, roles } = response;
          localStorage.setItem('accessToken',accessToken);
          localStorage.setItem('tokenType',tokenType);
          localStorage.setItem('id',id);
          localStorage.setItem('username',username);
          localStorage.setItem('email',email);
          const role = localStorage.setItem('roles',roles);
          //this(response);
          // if(role === "ROLES_ADMIN")
          // {
             
          // }
          // else{
          //   this.router.navigate(['/']);
          // }
          this.router.navigate(['/']);
        },
        error => {
          alert('Please fill out all fields correctly.');
          console.error('Login failed', error);
        }
      );
      console.log('Prepared Login Data:', loginData);
      // You can now send this data to your backend or perform further actions
   
  }
}
