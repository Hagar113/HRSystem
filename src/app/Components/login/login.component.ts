import { Component} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent {
  loginForm: FormGroup;
  hide = true;

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(6)]);

  constructor(private fb: FormBuilder){
    this.loginForm = this.fb.group({
      email: this.email,
      password: this.password,
    });
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Form submitted:', this.loginForm.value);
    }
  }

}
