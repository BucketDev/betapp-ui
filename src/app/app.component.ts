import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { FireAuthService } from './providers/shared/fire-auth.service';
import { User } from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'BetApp';
  showNavBar: boolean = true;
  loading: boolean = true;

  constructor(private router: Router,
              private auth: FireAuthService) {
    this.auth.afAuth.authState.subscribe((user: User) => { if(user) this.loading = false });
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd)
        this.showNavBar = !event.url.startsWith('/login');
    });
  }
}
