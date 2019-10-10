import { Component, OnInit } from '@angular/core';
import { User } from '../../../interfaces/user.interface';
import { FireAuthService } from '../../../providers/fire-auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: []
})
export class SignInComponent implements OnInit {
  user: User;

  constructor(private auth: FireAuthService) {
    this.user = {email: '', password: ''};
  }

  ngOnInit() {
  }

  signin = () => this.auth.emailLogin(this.user).catch(error => console.log(error));

}
