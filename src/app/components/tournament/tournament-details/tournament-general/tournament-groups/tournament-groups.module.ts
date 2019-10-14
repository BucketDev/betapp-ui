import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SharedModule } from '../../../../shared/shared.module';
import { SharedPipeModule } from '../../../../../pipes/shared-pipe.module';
import { AngularMaterialModule } from '../../../../../angular-material.module';

import { GroupParticipantsComponent } from './group-participants/group-participants.component';
import { ParticipantModalComponent } from './group-participants/participant-modal/participant-modal.component';
import { GroupTeamsComponent } from './group-teams/group-teams.component';
import { TeamModalComponent } from './group-teams/team-modal/team-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    SharedPipeModule,
    FontAwesomeModule,
    AngularMaterialModule
  ],
  declarations: [
    GroupParticipantsComponent,
    ParticipantModalComponent,
    GroupTeamsComponent,
    TeamModalComponent
  ],
  exports: [
    GroupParticipantsComponent,
    GroupTeamsComponent
  ],
  entryComponents: [
    ParticipantModalComponent,
    TeamModalComponent
  ]
})
export class TournamentGroupsModule { }
