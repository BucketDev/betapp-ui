import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

import { UserFollowersService } from '../../../../../providers/user/user-followers.service';
import { FireAuthService } from '../../../../../providers/shared/fire-auth.service';
import { User } from '../../../../../interfaces/user/user.interface';
import { UserDetails } from '../../../../../interfaces/user/user-details.interface';

@Component({
  selector: 'app-profile-modal',
  templateUrl: './profile-modal.component.html',
  styleUrls: ['./profile-modal.component.css']
})
export class ProfileModalComponent implements OnInit {

  user: UserDetails;
  loading: boolean = true;

  constructor(public userFollowersService: UserFollowersService,
              private bottomSheetRef: MatBottomSheetRef<ProfileModalComponent>,
              private auth: FireAuthService,
              private changeDetectorRef: ChangeDetectorRef,
              @Inject(MAT_BOTTOM_SHEET_DATA) public data: {user: User}) {
    this.userFollowersService.findFollowingByUid(this.data.user.uid, auth.user.uid)
      .subscribe((user: UserDetails) => {
        this.user = user;
        this.loading = false;
        this.changeDetectorRef.markForCheck();
      })
  }

  follow = () => {
    this.loading = true;
    this.userFollowersService.follow(this.user.uid)
      .subscribe((user: User) => {
        this.user.following = true;
        this.user.followersCount++;
        this.loading = false;
        this.changeDetectorRef.markForCheck();
      });
  }

  unfollow = () => {
    this.loading = true;
    this.userFollowersService.unfollow(this.user.uid)
      .subscribe((user: User) => {
        this.user.following = false;
        this.user.followersCount--;
        this.loading = false;
        this.changeDetectorRef.markForCheck();
      });
  }

  ngOnInit() {
  }

}
