import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserFollowersService } from '../../../../../providers/user/user-followers.service';
import { UserFollower } from '../../../../../interfaces/user/user-follower.interface';
import { UserService } from '../../../../../providers/user/user.service';
import { User } from '../../../../../interfaces/user/user.interface';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { FollowModalComponent } from '../follow-modal/follow-modal.component';

@Component({
  selector: 'app-profile-following',
  templateUrl: './profile-following.component.html',
  styleUrls: ['./profile-following.component.css']
})
export class ProfileFollowingComponent implements OnInit {

  user: UserFollower;
  searchResultUsers: User[];
  loading: boolean = true;

  constructor(private userFollowersService: UserFollowersService,
              private userService: UserService,
              private bottomSheet: MatBottomSheet,
              private route: ActivatedRoute) {
    this.route.parent.parent.params
      .subscribe(params => this.userFollowersService.findByUid(params['uid'])
        .subscribe((user: UserFollower) => {
          this.loading = false;
          this.user = user;
        }));
  }

  searchUser = (userElement: HTMLInputElement) => {
    if(userElement.value.length > 3) {
      this.userService.findByDisplayName(userElement.value)
        .subscribe((data: User[]) => this.searchResultUsers = data);
    } else {
      this.searchResultUsers = null;
    }
  }

  follow = (user: User) => {
    let ref = this.bottomSheet.open(FollowModalComponent, { data: { user } });
    ref.afterDismissed().subscribe((data: User) => {
      this.searchResultUsers = null;
      if (data) {
        this.loading = true;
        this.userFollowersService.follow(data.uid)
          .subscribe((user: User) => {
            this.user.following.push(user);
            this.loading = false;
          });
      }
    })
  }

  unfollow = (user: User) => {
    this.loading = true;
    this.userFollowersService.unfollow(user.uid)
      .subscribe(() => {
        this.user.following = this.user.following.filter((_user: User) => _user.id != user.id);
        this.loading = false;
      });
  }

  ngOnInit() { }

}
