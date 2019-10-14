import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

import { User } from '../../../../../interfaces/user/user.interface';

@Component({
  selector: 'app-follow-modal',
  templateUrl: './follow-modal.component.html',
  styleUrls: ['./follow-modal.component.css']
})
export class FollowModalComponent implements OnInit {

  user: User;

  constructor(private bottomSheetRef: MatBottomSheetRef<FollowModalComponent>,
              @Inject(MAT_BOTTOM_SHEET_DATA) public data: {user: User}) {
    this.user = data.user;
  }

  followClicked = () => this.bottomSheetRef.dismiss(this.user);

  ngOnInit() {
  }

}
