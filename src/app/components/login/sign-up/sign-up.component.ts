import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { FireAuthService } from '../../../providers/shared/fire-auth.service';

import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: []
})
export class SignUpComponent {

  formSignUp: FormGroup;
  loading: boolean = false;

  constructor(private auth: FireAuthService,
              private snackBar: MatSnackBar,
              private router: Router) {
    this.formSignUp = new FormGroup({
      'email': new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
      ]),
      'password': new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      'repassword': new FormControl('')
    });
    this.formSignUp.controls['repassword'].setValidators([
      Validators.required,
      this.notEqual
    ]);
  }

  notEqual = (control: FormControl): {[s:string]:boolean} => {
    if( control.value !== this.formSignUp.controls['password'].value ) {
      return {'notequal': true};
    }
    return null;
  };

  getEmailErrorMessage = () => {
    let errors: ValidationErrors = this.formSignUp.get('email').errors;
    if (errors['required'])
      return 'This field is required';
    if (errors['pattern'])
      return 'Invalid email format';
  }

  getPasswordErrorMessage = () => {
    let errors: ValidationErrors = this.formSignUp.get('password').errors;
    if (errors['required'])
      return 'This field is required';
    if (errors['minlength'])
      return `Minimum characters are ${errors['minlength']['requiredLength']}`;
  }

  getRepasswordErrorMessage = () => {
    let errors: ValidationErrors = this.formSignUp.get('repassword').errors;
    if (errors['required'])
      return 'This field is required';
    if (errors['notequal'])
      return `Passwords don't match`;
  }

  signup = () => {
    this.loading = true;
    this.auth.emailSignIn(this.formSignUp.value)
    .catch(error => {
      if(error["code"] === 'auth/email-already-in-use') {
        let ref = this.snackBar.open('The email is already in use', 'Log In', { duration: 5000 })
        ref.onAction().subscribe(() => {
          this.router.navigateByUrl('/login');
        });
      } else {
        this.snackBar.open(error, '', { duration: 3000 })
      }
      this.loading = false;
    });
  }

}
