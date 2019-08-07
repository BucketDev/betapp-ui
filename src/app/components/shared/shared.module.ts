import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedPipeModule } from '../../pipes/shared-pipe.module';

import { LoadingComponent } from './loading/loading.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UploadComponent } from './upload/upload.component';
import { SaveInputComponent } from './save-input/save-input.component';
import { SavingButtonComponent } from './saving-button/saving-button.component';
import { ParticipantsListComponent } from './participants-list/participants-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    SharedPipeModule,
    FormsModule
  ],
  declarations: [
    LoadingComponent,
    NavbarComponent,
    UploadComponent,
    SaveInputComponent,
    SavingButtonComponent,
    ParticipantsListComponent
  ],
  exports: [
    LoadingComponent,
    NavbarComponent,
    UploadComponent,
    SaveInputComponent,
    SavingButtonComponent,
    ParticipantsListComponent
  ]
})
export class SharedModule { }
