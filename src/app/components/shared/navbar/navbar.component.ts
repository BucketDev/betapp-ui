import { Component, OnInit } from '@angular/core';

import { FireAuthService } from '../../../providers/shared/fire-auth.service';
import { NavBarService } from '../../../providers/shared/nav-bar.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public auth: FireAuthService,
              public navBarService: NavBarService) { }

  ngOnInit() {
  }

  toggleSideNav = () => this.navBarService.showSideNav = !this.navBarService.showSideNav

  logout = () => {
    this.auth.logout();
  }

}
