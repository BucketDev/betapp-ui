import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserFollowersService } from '../../../../../providers/user/user-followers.service';
import { UserFollower } from '../../../../../interfaces/user/user-follower.interface';
import { User } from '../../../../../interfaces/user/user.interface';
import { SubUserFollower } from '../../../../..//interfaces/user/sub-user-follower.interface';

@Component({
  selector: 'app-profile-followers',
  templateUrl: './profile-followers.component.html',
  styleUrls: ['./profile-followers.component.css']
})
export class ProfileFollowersComponent implements OnInit {

  loading: boolean = false;

  constructor(public userFollowersService: UserFollowersService) { }

  follow = (user: SubUserFollower) => {
    this.loading = true;
    this.userFollowersService.follow(user.uid)
      .subscribe((user: SubUserFollower) => {
        this.userFollowersService.user.following.push(user);
        this.userFollowersService.user.followers =
          this.userFollowersService.user.followers.map(
          (follower: SubUserFollower) => follower.id === user.id ? user : follower);
        this.loading = false;
      });
  }

  ngOnInit() { }

}
