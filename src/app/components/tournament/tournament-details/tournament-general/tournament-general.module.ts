import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from '../../../../components/shared/shared.module';
import { SharedPipeModule } from '../../../../pipes/shared-pipe.module';
import { TournamentPlayoffsModule } from './tournament-playoffs/tournament-playoffs.module';

import { TournamentGeneralComponent } from './tournament-general.component';
import { TournamentGroupsComponent } from './tournament-groups/tournament-groups.component';
import { ParticipantModalComponent } from './tournament-groups/participant-modal/participant-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    SharedModule,
    SharedPipeModule,
    NgbModule,
    TournamentPlayoffsModule
  ],
  declarations: [
    TournamentGeneralComponent,
    TournamentGroupsComponent,
    ParticipantModalComponent
  ],
  exports: [
  ]
})
export class TournamentGeneralModule { }
