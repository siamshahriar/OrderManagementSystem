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
    this.store.login();
    console.log(this.loginForm.value);
    // Perform login logic here
  }
}
