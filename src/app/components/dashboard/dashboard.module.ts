import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SharedModule } from '../shared/shared.module';
import { AngularMaterialModule } from '../../angular-material.module';
import { SharedPipeModule } from '../../pipes/shared-pipe.module';
import { TimeLineModule } from './time-line/time-line.module';

import { DashboardComponent } from './dashboard.component';
import { TournamentComponent } from './tournament/tournament.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SharedPipeModule,
    AngularMaterialModule,
    FontAwesomeModule,
    RouterModule,
    TimeLineModule
  ],
  declarations: [
    DashboardComponent,
    TournamentComponent
  ],
})
export class DashboardModule { }
