import { Component, OnInit } from '@angular/core';

import { FireAuthService } from '../../../providers/shared/fire-auth.service';

import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  faSignOutAlt = faSignOutAlt;

  constructor(public auth: FireAuthService) { }

  ngOnInit() {
  }

  logout = () => {
    this.auth.logout();
  }

}
