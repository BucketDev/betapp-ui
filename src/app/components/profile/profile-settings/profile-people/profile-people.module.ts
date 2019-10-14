import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../../../shared/shared.module';
import { SharedPipeModule } from '../../../../pipes/shared-pipe.module';
import { AngularMaterialModule } from '../../../../angular-material.module';

import { ProfilePeopleComponent } from './profile-people.component';
import { ProfileFollowersComponent } from './profile-followers/profile-followers.component';
import { ProfileFollowingComponent } from './profile-following/profile-following.component';
import { FollowingListComponent } from './following-list/following-list.component';
import { FollowModalComponent } from './follow-modal/follow-modal.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    SharedModule,
    SharedPipeModule,
    AngularMaterialModule
  ],
  declarations: [
    ProfilePeopleComponent,
    ProfileFollowersComponent,
    ProfileFollowingComponent,
    FollowingListComponent,
    FollowModalComponent
  ],
  exports: [
    ProfilePeopleComponent
  ],
  entryComponents: [
    FollowModalComponent
  ]
})
export class ProfilePeopleModule { }
