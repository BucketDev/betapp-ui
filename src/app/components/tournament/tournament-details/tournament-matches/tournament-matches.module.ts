import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchesGroupsModule } from './matches-groups/matches-groups.module';

import { TournamentMatchesComponent } from './tournament-matches.component';

@NgModule({
  imports: [
    CommonModule,
    MatchesGroupsModule
  ],
  declarations: [
    TournamentMatchesComponent
  ],
  exports: []
})
export class TournamentMatchesModule { }
