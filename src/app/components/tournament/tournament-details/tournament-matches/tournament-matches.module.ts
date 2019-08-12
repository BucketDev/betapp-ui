import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchesGroupsModule } from './matches-groups/matches-groups.module';

import { TournamentMatchesComponent } from './tournament-matches.component';
import { MatchesPlayoffsComponent } from './matches-playoffs/matches-playoffs.component';

@NgModule({
  imports: [
    CommonModule,
    MatchesGroupsModule
  ],
  declarations: [
    TournamentMatchesComponent,
    MatchesPlayoffsComponent
  ],
  exports: []
})
export class TournamentMatchesModule { }
