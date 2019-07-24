import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SharedModule } from '../../shared/shared.module';
import { TournamentGeneralModule } from './tournament-general/tournament-general.module';

import { TournamentMatchesComponent } from './tournament-matches/tournament-matches.component';
import { TournamentSettingsComponent } from './tournament-settings/tournament-settings.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FontAwesomeModule,
    SharedModule,
    TournamentGeneralModule
  ],
  declarations: [
    TournamentMatchesComponent,
    TournamentSettingsComponent
  ],
  exports: [
    TournamentMatchesComponent,
    TournamentSettingsComponent
  ]
})
export class TournamentDetailsModule { }
