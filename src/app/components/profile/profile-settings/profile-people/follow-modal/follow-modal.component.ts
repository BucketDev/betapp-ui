import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

import { UserFollowersService } from '../../../../../providers/user/user-followers.service';
import { UserDetails } from '../../../../../interfaces/user/user-details.interface';

@Component({
  selector: 'app-follow-modal',
  templateUrl: './follow-modal.component.html',
  styleUrls: ['./follow-modal.component.css']
})
export class FollowModalComponent implements OnInit {

  user: UserDetails;

  constructor(public userFollowersService: UserFollowersService,
              private bottomSheetRef: MatBottomSheetRef<FollowModalComponent>,
              @Inject(MAT_BOTTOM_SHEET_DATA) public data: {user: UserDetails}) {
    this.user = data.user;
  }

  followClicked = () => this.bottomSheetRef.dismiss(this.user);

  ngOnInit() {
  }

}
