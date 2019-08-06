import { Component, OnInit } from '@angular/core';

import { faUserCircle, faWallet, faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { FireAuthService } from '../../providers/fire-auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  faUserCircle = faUserCircle;
  faWallet = faWallet;
  faUserSecret = faUserSecret;

  constructor(public auth: FireAuthService) { }

  ngOnInit() {
  }

}
