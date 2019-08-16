import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SharedModule } from '../../../../../components/shared/shared.module';
import { SharedPipeModule } from '../../../../../pipes/shared-pipe.module';
import { AngularMaterialModule } from '../../../../../angular-material.module';

import { TournamentGroupsComponent } from './tournament-groups.component';
import { ParticipantModalComponent } from './participant-modal/participant-modal.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SharedPipeModule,
    FontAwesomeModule,
    AngularMaterialModule
  ],
  declarations: [
    TournamentGroupsComponent,
    ParticipantModalComponent
  ],
  exports: [TournamentGroupsComponent],
  entryComponents: [ParticipantModalComponent]
})
export class TournamentGroupsModule { }
