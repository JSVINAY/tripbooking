import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrl: './forgotpassword.component.css'
})
export class ForgotpasswordComponent {
  forgotPasswordForm: FormGroup;
  isForgotPasswordModalOpen = false;

  constructor(private fb: FormBuilder) {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], // Email is required
      newPassword: ['', [Validators.required, Validators.minLength(6)]], // Password is required with min length
      confirmPassword: ['', Validators.required] // Confirm password is required
    }, {
      validators: this.passwordMatchValidator // Custom validator for password match
    });
  }

  openForgotPasswordModal() {
    this.isForgotPasswordModalOpen = true;
  }

  closeForgotPasswordModal() {
    this.isForgotPasswordModalOpen = false;
  }

  passwordMatchValidator(group: FormGroup) {
    const password = group.get('newPassword')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { notMatching: true };
  }

  onResetPassword() {
    if (this.forgotPasswordForm.valid) {
      console.log('Password reset successful:', this.forgotPasswordForm.value);
      alert('Password reset successfully!');
      this.closeForgotPasswordModal();
      this.forgotPasswordForm.reset();
    } else {
      alert('Please fill out all fields correctly.');
    }
  }
}

