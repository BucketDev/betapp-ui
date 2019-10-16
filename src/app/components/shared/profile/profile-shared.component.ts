import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { User as FireBaseUser } from 'firebase/app';

import { UserFollowersService } from '../../../providers/user/user-followers.service';
import { FireAuthService } from '../../../providers/shared/fire-auth.service';
import { NavBarService } from '../../../providers/shared/nav-bar.service';
import { UserFollowerCount } from '../../../interfaces/user/user-follower-count.interface';


@Component({
  selector: 'app-shared-profile',
  templateUrl: './profile-shared.component.html',
  styleUrls: []
})
export class ProfileSharedComponent implements OnInit {
  
  user: UserFollowerCount

  constructor(private auth: FireAuthService,
              private userFollowersService: UserFollowersService,
              private navBarService: NavBarService) { }

  hideSideNav = () => this.navBarService.showSideNav = false;

  ngOnInit() { }

  findUserInfo = () => this.userFollowersService.findCountByUid(this.auth.user.uid)
    .subscribe((_user: UserFollowerCount) => this.user = _user);

  clearUserInfo = () => this.user = null;

}
