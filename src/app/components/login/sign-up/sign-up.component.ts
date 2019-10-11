import { Component, OnInit } from '@angular/core';

import { FireAuthService } from '../../../providers/shared/fire-auth.service';

import { User } from '../../../interfaces/user/user.interface';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: []
})
export class SignUpComponent implements OnInit {

  user: User;
  repassword: string = '';

  constructor(private auth: FireAuthService) {
    this.user = {email:''}
  }

  ngOnInit() {
  }

  signup = () => this.auth.emailSignIn(this.user).catch(error => console.log(error));

}
