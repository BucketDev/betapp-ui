import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User as FireBaseUser, auth } from 'firebase/app';

import { UserFollowersService } from '../../../providers/user/user-followers.service';
import { UserFollowerCount } from '../../../interfaces/user/user-follower-count.interface';


@Component({
  selector: 'app-dashboard-profile',
  templateUrl: './profile.component.html',
  styleUrls: []
})
export class ProfileComponent implements OnInit {

  user: UserFollowerCount

  constructor(private afAuth: AngularFireAuth,
              private userFollowersService: UserFollowersService) {
    this.afAuth.authState.subscribe((user: FireBaseUser) => {
      if (user) {
        this.userFollowersService.findCountByUid(user.uid)
          .subscribe((_user: UserFollowerCount) => this.user = _user);
      }
    });
  }

  ngOnInit() { }

}
