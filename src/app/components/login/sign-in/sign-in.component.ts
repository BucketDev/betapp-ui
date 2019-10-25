import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';

import { FireAuthService } from '../../../providers/shared/fire-auth.service';
import { User } from '../../../interfaces/user/user.interface';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: []
})
export class SignInComponent {

  formSignIn: FormGroup;
  loading: boolean = false;

  constructor(private auth: FireAuthService,
              private snackBar: MatSnackBar) {
    this.formSignIn = new FormGroup({
      'email': new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
      ]),
      'password': new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ])
    });
  }

  getEmailErrorMessage = () => {
    let errors: ValidationErrors = this.formSignIn.get('email').errors;
    if (errors['required'])
      return 'This field is required';
    if (errors['pattern'])
      return 'Invalid email format';
  }

  getPasswordErrorMessage = () => {
    let errors: ValidationErrors = this.formSignIn.get('password').errors;
    if (errors['required'])
      return 'This field is required';
    if (errors['minlength'])
      return `Minimum characters are ${errors['minlength']['requiredLength']}`;
  }

  signin = () => {
    this.loading = true;
    this.auth.emailLogin(this.formSignIn.value)
    .catch(error => {
      this.snackBar.open('User or password invalid', '', { duration: 3000 })
      this.loading = false;
    });
  }

}
