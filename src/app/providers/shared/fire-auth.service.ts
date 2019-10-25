import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { User as FireBaseUser, auth } from 'firebase/app';
import { User } from '../../interfaces/user/user.interface';
import { UserService } from '../user/user.service';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FireAuthService {

  user: User;
  $userRetrieved = new ReplaySubject<boolean>(1);
  idToken: string;
  isNewUser: boolean = false;

  constructor(private router: Router,
              public afAuth:AngularFireAuth,
              private userService: UserService) {
    this.afAuth.authState.subscribe((user: FireBaseUser) => {
      if(user) {
        user.getIdToken().then(idtoken => {
          this.idToken = idtoken;
          !this.isNewUser && this.userService.findByUid(user.uid)
            .subscribe((user: User) => {
              this.session = user;
              if (this.router.url.startsWith('/login')) {
                this.router.navigate(['/dashboard']);
              }
            });
          });
      } else {
        this.isNewUser = false;
        this.session = null;
        let route = this.router.url.startsWith('/login') ? this.router.url : '/login';
        this.router.navigate([route]);
      }
    });
  }

  set session(user: User) {
    this.user = user;
    this.$userRetrieved.next(!!user);
  }

  get authenticated(): boolean {
    return this.afAuth.authState !== null;
  }

  emailSignIn = (user: User): Promise<void> =>
    this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
      .then((data: auth.UserCredential) => { if (data.additionalUserInfo.isNewUser) this.createUser(data); });

  emailLogin = (user: User): Promise<void> =>
    this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password).then();

  googleLogin = () =>
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()
      .setCustomParameters({ prompt: 'select_account' }))
    .then((data: auth.UserCredential) => { if (data.additionalUserInfo.isNewUser) this.createUser(data); });

  createUser = (data: auth.UserCredential) => {
    this.isNewUser = true;
    let user: User = {
      email: data.user.email,
      uid: data.user.uid,
      photoUrl: data.user.photoURL,
      displayName: data.user.displayName ? data.user.displayName : data.user.email,
      provider: data.additionalUserInfo.providerId
    };
    data.user.getIdToken().then(idToken => {
      this.idToken = idToken;
      this.userService.save(user).subscribe(
        (_user) =>  {
          this.session = user;
          this.router.navigate(['/dashboard']);
        },
        (error: any) => console.log(error)
      );
    })
  }

  logout = () => {
    this.afAuth.auth.signOut();
    this.session = null;
  }

  updatePassword = (newPassword: string) => this.afAuth.auth.currentUser.updatePassword(newPassword);

}
