import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserFollowersService } from '../../../../providers/user/user-followers.service';
import { UserFollower } from '../../../../interfaces/user/user-follower.interface';

@Component({
  selector: 'app-profile-people',
  templateUrl: './profile-people.component.html',
  styleUrls: ['./profile-people.component.css']
})
export class ProfilePeopleComponent implements OnInit {

  loading: boolean = true;

  constructor(private userFollowersService: UserFollowersService,
              private route: ActivatedRoute) {
    this.route.parent.params
      .subscribe(params => this.userFollowersService.findByUid(params['uid'])
        .subscribe((user: UserFollower) => {
          this.loading = false;
          userFollowersService.user = user;
        }));
  }

  ngOnInit() {
  }

}
