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

  user: UserFollower;
  loading: boolean = true;

  constructor(private userFollowersService: UserFollowersService,
              private route: ActivatedRoute) {
    this.route.parent.parent.params
      .subscribe(params => this.userFollowersService.findByUid(params['uid'])
        .subscribe((user: UserFollower) => {
          this.loading = false;
          this.user = user;
        }));
  }

  following = (user: User) =>
    this.user.following.filter((_user: User) => _user.id === user.id).length > 0;

  follow = (user: User) => {
    this.loading = true;
    this.userFollowersService.follow(user.uid)
      .subscribe((user: User) => {
        this.user.following.push(user);
        this.loading = false;
      });
  }

  ngOnInit() { }

}
