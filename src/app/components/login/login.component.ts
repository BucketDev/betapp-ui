import { Component, OnInit } from '@angular/core';

import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FireAuthService } from '../../providers/shared/fire-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  faGoogle = faGoogle;

  constructor(private auth: FireAuthService) {
  }

  ngOnInit() {
  }

  signWithGoogle = () => {
    this.auth.googleLogin();
  }

}
