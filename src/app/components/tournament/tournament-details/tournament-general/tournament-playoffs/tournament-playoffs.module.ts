import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedPipeModule } from '../../../../../pipes/shared-pipe.module';
import { AngularMaterialModule } from '../../../../../angular-material.module';
import { SharedModule } from '../../../../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { PlayoffParticipantsComponent } from './playoff-participants/playoff-participants.component';
import { ParticipantsBracketsComponent } from './playoff-participants/participants-brackets/participants-brackets.component';
import { PlayoffTeamsComponent } from './playoff-teams/playoff-teams.component';
import { TeamsBracketsComponent } from './playoff-teams/teams-brackets/teams-brackets.component';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SharedPipeModule,
    AngularMaterialModule,
    FontAwesomeModule
  ],
  declarations: [
    PlayoffParticipantsComponent,
    ParticipantsBracketsComponent,
    PlayoffTeamsComponent,
    TeamsBracketsComponent
  ],
  exports: [
    PlayoffParticipantsComponent,
    ParticipantsBracketsComponent,
    PlayoffTeamsComponent
  ]
})
export class TournamentPlayoffsModule { }
