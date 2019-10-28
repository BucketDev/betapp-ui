import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

import { UserFollowersService } from '../../../../../providers/user/user-followers.service';
import { SubUserFollower } from '../../../../../interfaces/user/sub-user-follower.interface';
import { FollowModalComponent } from '../follow-modal/follow-modal.component';
import { UserDetails } from '../../../../../interfaces/user/user-details.interface';

@Component({
  selector: 'app-profile-following',
  templateUrl: './profile-following.component.html',
  styleUrls: ['./profile-following.component.css']
})
export class ProfileFollowingComponent implements OnInit {

  loading: boolean = false;
  searchResultUsers: UserDetails[];
  name: string;

  constructor(public userFollowersService: UserFollowersService,
              private bottomSheet: MatBottomSheet) { }

  searchUser = (userElement: HTMLInputElement) => {
    if(userElement.value.length > 3) {
      this.userFollowersService.findByDisplayName(userElement.value)
        .subscribe((data: UserDetails[]) => this.searchResultUsers = data);
    } else {
      this.searchResultUsers = null;
    }
  }

  follow = (user: UserDetails) => {
    let ref = this.bottomSheet.open(FollowModalComponent, { data: { user } });
    ref.afterDismissed().subscribe((data: UserDetails) => {
      this.clearSearch();
      if (data) {
        this.loading = true;
        this.userFollowersService.follow(data.uid)
          .subscribe((user: SubUserFollower) => {
            this.userFollowersService.user.following.push(user);
            this.userFollowersService.user.followers =
              this.userFollowersService.user.followers.map(
              (follower: SubUserFollower) => follower.id === user.id ? user : follower);
            this.loading = false;
          });
      }
    })
  }

  unfollow = (user: SubUserFollower) => {
    this.loading = true;
    this.userFollowersService.unfollow(user.uid)
      .subscribe(() => {
        this.userFollowersService.user.following =
          this.userFollowersService.user.following.filter((_user: SubUserFollower) => _user.id != user.id);
        this.userFollowersService.user.followers.forEach(
          (follower: SubUserFollower) => {
            if (follower.id === user.id)
              follower.followersCount--;
          });
        this.loading = false;
      });
  }

  clearSearch = () => {
    this.name = "";
    this.searchResultUsers = null;
  }

  ngOnInit() { }

}
