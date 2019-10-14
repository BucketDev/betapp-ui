import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

import { UserFollowersService } from '../../../../../providers/user/user-followers.service';
import { UserService } from '../../../../../providers/user/user.service';
import { UserFollower } from '../../../../../interfaces/user/user-follower.interface';
import { User } from '../../../../../interfaces/user/user.interface';
import { FollowModalComponent } from '../follow-modal/follow-modal.component';

@Component({
  selector: 'app-profile-following',
  templateUrl: './profile-following.component.html',
  styleUrls: ['./profile-following.component.css']
})
export class ProfileFollowingComponent implements OnInit {

  loading: boolean = false;
  searchResultUsers: User[];
  name: string;

  constructor(public userFollowersService: UserFollowersService,
              private userService: UserService,
              private bottomSheet: MatBottomSheet) { }

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
      this.clearSearch();
      if (data) {
        this.loading = true;
        this.userFollowersService.follow(data.uid)
          .subscribe((user: User) => {
            this.userFollowersService.user.following.push(user);
            this.loading = false;
          });
      }
    })
  }

  unfollow = (user: User) => {
    this.loading = true;
    this.userFollowersService.unfollow(user.uid)
      .subscribe(() => {
        this.userFollowersService.user.following =
          this.userFollowersService.user.following.filter((_user: User) => _user.id != user.id);
        this.loading = false;
      });
  }

  clearSearch = () => {
    this.name = "";
    this.searchResultUsers = null;
  }

  ngOnInit() { }

}
