import { Component, OnInit } from '@angular/core';

import { FireAuthService } from '../../../providers/fire-auth.service';

import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  faSignOutAlt = faSignOutAlt;

  constructor(private auth: FireAuthService) { }

  ngOnInit() {
  }

  logout = () => {
    this.auth.logout();
  }

}
