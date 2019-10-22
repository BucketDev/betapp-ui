import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SharedModule } from '../../../shared/shared.module';
import { SharedPipeModule } from '../../../../pipes/shared-pipe.module';
import { AngularMaterialModule } from '../../../../angular-material.module';
import { TournamentGroupsModule } from './tournament-groups/tournament-groups.module';
import { TournamentPlayoffsModule } from './tournament-playoffs/tournament-playoffs.module';

import { TournamentGeneralComponent } from './tournament-general.component';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    AngularMaterialModule,
    SharedModule,
    SharedPipeModule,
    TournamentGroupsModule,
    TournamentPlayoffsModule
  ],
  declarations: [TournamentGeneralComponent],
  exports: []
})
export class TournamentGeneralModule { }
