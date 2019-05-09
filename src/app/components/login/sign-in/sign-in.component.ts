import { Component, OnInit } from '@angular/core';
import { User } from '../../../interfaces/user.interface';
import { FireAuthService } from '../../../providers/fire-auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  user: User;

  constructor(private auth: FireAuthService) {
    this.user = {email: 'rodrigo.loyola@live.com', password: 'robalon'};
  }

  ngOnInit() {
  }

  signin = () => this.auth.emailLogin(this.user).catch(error => console.log(error));

}
