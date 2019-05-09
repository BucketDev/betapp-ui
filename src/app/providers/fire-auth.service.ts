import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { User as FireBaseUser } from 'firebase/app';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class FireAuthService {

  user: User;

  constructor(private router: Router,
              public afAuth:AngularFireAuth) {
    this.afAuth.authState.subscribe((user: FireBaseUser) => {
      if(user) {
        this.session = user;
        let route = this.router.url === '/login' ? '/' : this.router.url;
        this.router.navigate([route]);
      } else {
        let route = this.router.url.startsWith('/login') ? this.router.url : '/login';
        this.router.navigate([route]);
      }
    });
  }

  set session(user: User) {
    this.user = {
      uid: user.uid,
      email: user.email
    }
  }

  get authenticated(): boolean {
    return this.afAuth.authState !== null;
  }

  emailSignIn = (user: User): Promise<void> =>
    this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
      .then(data => {
        if(data.additionalUserInfo.isNewUser) {
          delete user.password;
          user.uid = data.user.uid;
          this.session = user;
          //TODO: create user
        }
      });

  emailLogin = (user: User): Promise<void> =>
    this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
      .then(data => console.log(data));

  logout = () => {
    this.afAuth.auth.signOut();
    this.user = null;
    this.router.navigate(['/login'])
  }

}
