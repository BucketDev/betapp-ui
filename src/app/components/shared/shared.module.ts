import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SharedPipeModule } from '../../pipes/shared-pipe.module';
import { AngularMaterialModule } from '../../angular-material.module';

import { LoadingComponent } from './loading/loading.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UploadComponent } from './upload/upload.component';
import { SaveInputComponent } from './save-input/save-input.component';
import { SavingButtonComponent } from './saving-button/saving-button.component';
import { ParticipantsListComponent } from './participants-list/participants-list.component';
import { ProfileSideNavComponent } from './profile/profile-sidenav/profile-sidenav.component';
import { ProfilePhotoComponent } from './profile/profile-photo/profile-photo.component';
import { ProfileModalComponent } from './profile/profile-photo/profile-modal/profile-modal.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    SharedPipeModule,
    AngularMaterialModule,
    FormsModule
  ],
  declarations: [
    LoadingComponent,
    NavbarComponent,
    UploadComponent,
    SaveInputComponent,
    SavingButtonComponent,
    ParticipantsListComponent,
    ProfileSideNavComponent,
    ProfilePhotoComponent,
    ProfileModalComponent
  ],
  exports: [
    LoadingComponent,
    NavbarComponent,
    UploadComponent,
    SaveInputComponent,
    SavingButtonComponent,
    ParticipantsListComponent,
    ProfileSideNavComponent,
    ProfilePhotoComponent
  ],
  entryComponents: [
    ProfileModalComponent
  ]
})
export class SharedModule { }
