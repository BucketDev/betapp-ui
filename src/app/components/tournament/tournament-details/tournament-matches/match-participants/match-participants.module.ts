import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SharedModule } from '../../../../shared/shared.module';
import { SharedPipeModule } from '../../../../../pipes/shared-pipe.module';
import { AngularMaterialModule } from '../../../../../angular-material.module';
import { MatchParticipantsComponent } from './match-participants.component';
import { MatchParticipantsUpdateComponent } from './match-participants-update/match-participants-update.component';
import { MatchParticipantsDateComponent } from './match-participants-date/match-participants-date.component';



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
    MatchParticipantsUpdateComponent,
    MatchParticipantsDateComponent
  ],
  exports: [
    MatchParticipantsComponent
  ],
  entryComponents: [
    MatchParticipantsUpdateComponent,
    MatchParticipantsDateComponent
  ]
})
export class MatchParticipantsModule { }
