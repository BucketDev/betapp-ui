import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SharedModule } from '../../../shared/shared.module';
import { SharedPipeModule } from '../../../../pipes/shared-pipe.module';

import { TournamentMatchesComponent } from './tournament-matches.component';
import { MatchesPlayoffsComponent } from './matches-playoffs/matches-playoffs.component';
import { MatchesGroupsComponent } from './matches-groups/matches-groups.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    SharedModule,
    SharedPipeModule
  ],
  declarations: [
    TournamentMatchesComponent,
    MatchesPlayoffsComponent,
    MatchesGroupsComponent
  ],
  exports: []
})
export class TournamentMatchesModule { }
