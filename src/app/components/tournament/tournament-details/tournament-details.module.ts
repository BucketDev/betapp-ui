import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { TournamentGeneralComponent } from './tournament-general/tournament-general.component';
import { TournamentMatchesComponent } from './tournament-matches/tournament-matches.component';
import { TournamentSettingsComponent } from './tournament-settings/tournament-settings.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FontAwesomeModule,
  ],
  declarations: [
    TournamentGeneralComponent,
    TournamentMatchesComponent,
    TournamentSettingsComponent
  ],
  exports: [
    TournamentGeneralComponent,
    TournamentMatchesComponent,
    TournamentSettingsComponent
  ]
})
export class TournamentDetailsModule { }
