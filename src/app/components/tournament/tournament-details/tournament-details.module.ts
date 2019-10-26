import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AngularMaterialModule } from '../../../angular-material.module';
import { SharedModule } from '../../shared/shared.module';
import { SharedPipeModule } from '../../../pipes/shared-pipe.module';
import { TournamentGeneralModule } from './tournament-general/tournament-general.module';
import { TournamentMatchesModule } from './tournament-matches/tournament-matches.module';

import { TournamentSettingsComponent } from './tournament-settings/tournament-settings.component';
import { TournamentLeaderboardComponent } from './tournament-leaderboard/tournament-leaderboard.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AngularMaterialModule,
    FontAwesomeModule,
    SharedModule,
    SharedPipeModule,
    TournamentGeneralModule,
    TournamentMatchesModule
  ],
  declarations: [
    TournamentSettingsComponent,
    TournamentLeaderboardComponent
  ],
  exports: [
    TournamentSettingsComponent
  ]
})
export class TournamentDetailsModule { }
