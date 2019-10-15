import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SharedModule } from '../shared/shared.module';
import { AngularMaterialModule } from '../../angular-material.module';
import { SharedPipeModule } from '../../pipes/shared-pipe.module';
import { ImgPrivacyPipe } from '../../pipes/img-privacy.pipe';

import { DashboardComponent } from './dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { TournamentComponent } from './tournament/tournament.component';
import { RouterModule } from '@angular/router';
import { TimeLineComponent } from './time-line/time-line.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SharedPipeModule,
    AngularMaterialModule,
    FontAwesomeModule,
    RouterModule
  ],
  declarations: [
    DashboardComponent,
    ProfileComponent,
    TournamentComponent,
    TimeLineComponent
  ],
})
export class DashboardModule { }
