import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SharedModule } from '../../../../shared/shared.module';
import { SharedPipeModule } from '../../../../../pipes/shared-pipe.module';
import { AngularMaterialModule } from '../../../../../angular-material.module';

import { MatchTeamsComponent } from './match-teams.component';
import { MatchTeamsUpdateComponent } from './match-teams-update/match-teams-update.component';
import { MatchTeamsDateComponent } from './match-teams-date/match-teams-date.component';
import { MatchTeamsBetsComponent } from './match-teams-bets/match-teams-bets.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    SharedModule,
    SharedPipeModule,
    AngularMaterialModule
  ],
  declarations: [
    MatchTeamsComponent,
    MatchTeamsUpdateComponent,
    MatchTeamsDateComponent,
    MatchTeamsBetsComponent
  ],
  exports: [
    MatchTeamsComponent
  ],
  entryComponents: [
    MatchTeamsUpdateComponent,
    MatchTeamsDateComponent
  ]
})
export class MatchTeamsModule { }
