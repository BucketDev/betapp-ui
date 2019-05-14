import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SharedModule } from '../shared/shared.module';
import { SharedPipeModule } from '../../pipes/shared-pipe.module';

import { NewTournamentComponent } from './new/new-tournament.component';
import { TournamentComponent } from './tournament.component';
import { TournamentParticipantsComponent } from './tournament-participants/tournament-participants.component';
import { PoolSettingsComponent } from './pool-settings/pool-settings.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FontAwesomeModule,
    SharedModule,
    SharedPipeModule
  ],
  declarations: [
    NewTournamentComponent,
    TournamentComponent,
    TournamentParticipantsComponent,
    PoolSettingsComponent
  ],
})
export class TournamentModule { }
