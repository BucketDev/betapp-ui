import { Injectable } from '@angular/core';
import { CanActivate, Router, CanActivateChild } from '@angular/router';
import { FireAuthService } from './fire-auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth: FireAuthService,
              private router: Router) { }

  canActivate() {
    return this.auth.$userRetrieved.pipe(map((logged => {
      if(!logged) {
        this.router.navigate(['/login']);
      }
      return logged;
    })))
  }
}
