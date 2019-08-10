import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from '../../../../components/shared/shared.module';
import { SharedPipeModule } from '../../../../pipes/shared-pipe.module';
import { TournamentGeneralComponent } from './tournament-general.component';
import { TournamentGroupsComponent } from './tournament-groups/tournament-groups.component';
import { TournamentPlayoffsComponent } from './tournament-playoffs/tournament-playoffs.component';
import { ParticipantModalComponent } from './tournament-groups/participant-modal/participant-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    SharedModule,
    SharedPipeModule,
    NgbModule
  ],
  declarations: [
    TournamentGeneralComponent,
    TournamentGroupsComponent,
    TournamentPlayoffsComponent,
    ParticipantModalComponent
  ],
  exports: [
  ]
})
export class TournamentGeneralModule { }
