import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SharedModule } from '../shared/shared.module';
import { AngularMaterialModule } from '../../angular-material.module';
import { SharedPipeModule } from '../../pipes/shared-pipe.module';

import { DashboardComponent } from './dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { TournamentComponent } from './tournament/tournament.component';
import { RouterModule } from '@angular/router';

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
    TournamentComponent
  ],
})
export class DashboardModule { }
