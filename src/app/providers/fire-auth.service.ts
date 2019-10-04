import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { User as FireBaseUser, auth } from 'firebase/app';
import { User } from '../interfaces/user.interface';
import { UserService } from './user.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FireAuthService {

  user: User;
  idToken: string;

  constructor(private router: Router,
              public afAuth:AngularFireAuth,
              private userService: UserService) {
    this.afAuth.authState.subscribe((user: FireBaseUser) => {
      if(user) {
        user.getIdToken().then(idtoken => {
          this.idToken = idtoken
            let route = this.router.url.startsWith('/login') ? '/' : this.router.url;
            this.router.navigate([route]);
            !this.user && this.userService.findByUid(user.uid)
              .subscribe((user: User) => this.user = user);
            });
      } else {
        let route = this.router.url.startsWith('/login') ? this.router.url : '/login';
        this.router.navigate([route]);
      }
    });
  }

  set session(user: User) {
    this.user = user;
  }

  get authenticated(): boolean {
    return this.afAuth.authState !== null;
  }

  emailSignIn = (user: User): Promise<void> =>
    this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
      .then((data: auth.UserCredential) => {
        data.additionalUserInfo.isNewUser && this.createUser(data);
      });

  emailLogin = (user: User): Promise<void> =>
    this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
      .then(data => console.log(data));

  googleLogin = (): void => {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()
      .setCustomParameters({
        prompt: 'select_account'
      })
    ).then((data: auth.UserCredential) => data.additionalUserInfo.isNewUser && this.createUser(data));
  }

  createUser = (data: auth.UserCredential) => {
    let user: User = {
      email: data.user.email,
      uid: data.user.uid,
      photoUrl: data.user.photoURL,
      displayName: data.user.displayName ? data.user.displayName : data.user.email,
      provider: data.additionalUserInfo.providerId
    };
    this.session = user;//saving values to display them in navbar
    data.user.getIdToken().then(idToken => {
      this.idToken = idToken;
      this.userService.save(user).subscribe(
        (data: User) => console.log(data),
        (error: any) => console.log(error)
      );
    })
  }

  logout = () => {
    this.afAuth.auth.signOut();
    this.user = null;
    this.router.navigate(['/login'])
  }

  updatePassword = (newPassword: string) => this.afAuth.auth.currentUser.updatePassword(newPassword);

}
