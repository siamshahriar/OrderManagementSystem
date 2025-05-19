import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Component, inject } from '@angular/core';
import { AppStore } from '../../app.store';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: any;
  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: [''],
      password: [''],
    });
  }
  store = inject(AppStore);
  OnSubmitLogin() {
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;
    this.store.login(email, password);
    // Perform login logic here
  }
}
