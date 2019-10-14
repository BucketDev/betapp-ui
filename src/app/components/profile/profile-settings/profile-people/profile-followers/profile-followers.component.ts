import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserFollowersService } from '../../../../../providers/user/user-followers.service';
import { UserFollower } from '../../../../../interfaces/user/user-follower.interface';
import { User } from '../../../../../interfaces/user/user.interface';

@Component({
  selector: 'app-profile-followers',
  templateUrl: './profile-followers.component.html',
  styleUrls: ['./profile-followers.component.css']
})
export class ProfileFollowersComponent implements OnInit {

  loading: boolean = false;

  constructor(public userFollowersService: UserFollowersService) { }

  follow = (user: User) => {
    this.loading = true;
    this.userFollowersService.follow(user.uid)
      .subscribe((user: User) => {
        this.userFollowersService.user.following.push(user);
        this.loading = false;
      });
  }

  ngOnInit() { }

}
