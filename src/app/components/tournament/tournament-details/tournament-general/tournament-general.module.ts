import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SharedModule } from '../../../../components/shared/shared.module';
import { TournamentGeneralComponent } from './tournament-general.component';
import { TournamentGroupsComponent } from './tournament-groups/tournament-groups.component';
import { TournamentFinalsComponent } from './tournament-finals/tournament-finals.component';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    SharedModule
  ],
  declarations: [
    TournamentGeneralComponent,
    TournamentGroupsComponent,
    TournamentFinalsComponent
  ],
  exports: [
  ]
})
export class TournamentGeneralModule { }
