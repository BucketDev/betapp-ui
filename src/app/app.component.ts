import { Component, ViewChild, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

import { FireAuthService } from './providers/shared/fire-auth.service';
import { NavBarService } from './providers/shared/nav-bar.service';
import { ProfileSideNavComponent } from './components/shared/profile/profile-sidenav/profile-sidenav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title: string = 'BetApp';
  loading: boolean = true;
  showNavBar: boolean = true;
  faTwitter = faTwitter;
  faGithub = faGithub;
  @ViewChild(ProfileSideNavComponent, { static: false }) profile: ProfileSideNavComponent;

  constructor(private router: Router,
              private auth: FireAuthService,
              public navBarService: NavBarService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd)
        this.showNavBar = !event.url.startsWith('/login');
    });
  }

  ngOnInit(): void {
    this.auth.$userRetrieved.subscribe(() => this.loading = false);
  }

  openedChange = (opened) => {
    if (opened)
      this.profile.findUserInfo();
    else
      this.profile.clearUserInfo();
  }
}
