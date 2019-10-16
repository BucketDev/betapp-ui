import { Component, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { User } from 'firebase';

import { FireAuthService } from './providers/shared/fire-auth.service';
import { NavBarService } from './providers/shared/nav-bar.service';
import { ProfileSharedComponent } from './components/shared/profile/profile-shared.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'BetApp';
  loading: boolean = true;
  @ViewChild(ProfileSharedComponent, { static: false }) profile: ProfileSharedComponent;

  constructor(private router: Router,
              private auth: FireAuthService,
              public navBarService: NavBarService) {
    this.auth.afAuth.authState.subscribe((user: User) => { if(user) this.loading = false });
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd)
        this.navBarService.showNavBar = !event.url.startsWith('/login');
    });
  }

  openedChange = (opened) => {
    if (opened)
      this.profile.findUserInfo();
    else
      this.profile.clearUserInfo();
  }
}
