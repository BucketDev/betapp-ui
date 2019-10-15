import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User as FireBaseUser, auth } from 'firebase/app';

import { UserFollowersService } from '../../../providers/user/user-followers.service';
import { UserFollowerCount } from '../../../interfaces/user/user-follower-count.interface';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-dashboard-profile',
  templateUrl: './profile.component.html',
  styleUrls: []
})
export class ProfileComponent implements OnInit, OnDestroy {
  
  userSubscription: Subscription;
  user: UserFollowerCount

  constructor(private afAuth: AngularFireAuth,
              private userFollowersService: UserFollowersService) {
    this.userSubscription = this.afAuth.authState.subscribe((user: FireBaseUser) => {
      if (user) {
        this.userFollowersService.findCountByUid(user.uid)
          .subscribe((_user: UserFollowerCount) => this.user = _user);
      }
    });
  }
    
  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  ngOnInit() { }

}
