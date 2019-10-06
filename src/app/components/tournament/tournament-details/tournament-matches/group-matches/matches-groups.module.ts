import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SharedModule } from '../../../../shared/shared.module';
import { AngularMaterialModule } from '../../../../../angular-material.module';
import { SharedPipeModule } from '../../../../../pipes/shared-pipe.module';

import { MatchParticipantsComponent } from './match-participants/match-participants.component';
import { MatchUpdateComponent } from './match-participants/match-update/match-update.component';
import { MatchDateComponent } from './match-participants/match-date/match-date.component';
import { MatchTeamsComponent } from './match-teams/match-teams.component';

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
    MatchParticipantsComponent,
    MatchUpdateComponent,
    MatchDateComponent,
    MatchTeamsComponent
  ],
  exports: [
    MatchParticipantsComponent,
    MatchTeamsComponent
  ],
  entryComponents: [
    MatchUpdateComponent,
    MatchDateComponent
  ]
})
export class MatchesGroupsModule { }
