import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TournamentPlayoffsComponent } from './tournament-playoffs.component';
import { BracketsPlayoffsComponent } from './brackets-playoffs/brackets-playoffs.component';



@NgModule({
  imports: [
    CommonModule
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
