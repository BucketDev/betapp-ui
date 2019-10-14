import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../shared/shared.module';
import { SharedPipeModule } from '../../pipes/shared-pipe.module';
import { AngularMaterialModule } from '../../angular-material.module';

import { ProfileComponent } from './profile.component';
import { ProfileGeneralComponent } from './profile-settings/profile-general/profile-general.component';
import { ProfileWalletComponent } from './profile-settings/profile-wallet/profile-wallet.component';
import { ProfilePrivacyComponent } from './profile-settings/profile-privacy/profile-privacy.component';
import { ProfileNotificationsComponent } from './profile-settings/profile-notifications/profile-notifications.component';
import { ProfilePeopleModule } from './profile-settings/profile-people/profile-people.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FontAwesomeModule,
    SharedModule,
    AngularMaterialModule,
    SharedPipeModule,
    ProfilePeopleModule
  ],
  declarations: [
    ProfileComponent,
    ProfileGeneralComponent,
    ProfileWalletComponent,
    ProfilePrivacyComponent,
    ProfileNotificationsComponent
  ],
  exports: [
    ProfileComponent,
    ProfileGeneralComponent
  ]
})
export class ProfileModule { }
