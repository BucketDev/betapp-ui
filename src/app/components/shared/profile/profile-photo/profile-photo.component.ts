import { Component, OnInit, Input } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

import { User } from '../../../../interfaces/user/user.interface';
import { ProfileModalComponent } from './profile-modal/profile-modal.component';

@Component({
  selector: 'app-profile-photo',
  templateUrl: './profile-photo.component.html',
  styleUrls: ['./profile-photo.component.css']
})
export class ProfilePhotoComponent implements OnInit {

  @Input() size: string = '';
  @Input() circle: boolean = false;
  @Input() user: User = { };
  @Input() viewProfile: boolean = true;

  constructor(private bottomSheet: MatBottomSheet) { }

  ngOnInit() { }

  displayName = () => this.size === 'large';

  photoClicked = () => 
    this.viewProfile && this.bottomSheet
      .open(ProfileModalComponent, { data: { user: this.user } });
  

}
