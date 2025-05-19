import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AppStore } from '../../app.store';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  signupForm: any;
  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      email: [''],
      password: [''],
    });
  }
  store = inject(AppStore);

  OnSubmitSignup() {
    const email = this.signupForm.get('email').value;
    const password = this.signupForm.get('password').value;
    this.store.signup(email, password);
    // Perform signup logic here
  }
}
