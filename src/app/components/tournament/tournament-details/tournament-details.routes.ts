import { Routes } from '@angular/router';

import { TournamentGeneralComponent } from './tournament-general/tournament-general.component';
import { TournamentMatchesComponent } from './tournament-matches/tournament-matches.component';
import { TournamentSettingsComponent } from './tournament-settings/tournament-settings.component';

export const TOURNAMENT_DETAILS_ROUTES: Routes = [
  { path: 'general', component: TournamentGeneralComponent },
  { path: 'matches', component: TournamentMatchesComponent },
  { path: 'settings', component: TournamentSettingsComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'general' }
];
