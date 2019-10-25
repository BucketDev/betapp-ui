import { Component, OnInit } from '@angular/core';

import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FireAuthService } from '../../providers/shared/fire-auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  faGoogle = faGoogle;
  loading: boolean = false;

  constructor(private auth: FireAuthService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  signWithGoogle = () => {
    this.loading = true;
    this.auth.googleLogin()
    .catch((error) => {
      this.snackBar.open(error, '', { duration: 3000 });
      this.loading = false;
    })
  }

}
