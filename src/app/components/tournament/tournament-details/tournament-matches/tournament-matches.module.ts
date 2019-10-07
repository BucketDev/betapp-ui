import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatchParticipantsModule } from './match-participants/match-participants.module';
import { MatchTeamsModule } from './match-teams/match-teams.module';

import { TournamentMatchesComponent } from './tournament-matches.component';

@NgModule({
  imports: [
    CommonModule,
    MatchParticipantsModule,
    MatchTeamsModule
  ],
  declarations: [
    TournamentMatchesComponent
  ],
  exports: []
})
export class TournamentMatchesModule { }
