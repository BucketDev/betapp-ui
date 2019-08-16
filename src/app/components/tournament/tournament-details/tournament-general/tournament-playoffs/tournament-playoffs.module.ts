import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedPipeModule } from '../../../../../pipes/shared-pipe.module';

import { TournamentPlayoffsComponent } from './tournament-playoffs.component';
import { BracketsPlayoffsComponent } from './brackets-playoffs/brackets-playoffs.component';



@NgModule({
  imports: [
    CommonModule,
    SharedPipeModule,
  ],
  declarations: [
    TournamentPlayoffsComponent,
    BracketsPlayoffsComponent
  ],
  exports: [
    TournamentPlayoffsComponent,
    BracketsPlayoffsComponent
  ]
})
export class TournamentPlayoffsModule { }
