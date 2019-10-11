import { Routes } from '@angular/router';

import { NewTournamentComponent } from './new/new-tournament.component';
import { TournamentComponent } from './tournament.component';

import { TOURNAMENT_DETAILS_ROUTES } from './tournament-details/tournament-details.routes';

export const TOURNAMENT_ROUTES: Routes = [
  { path: 'new', component: NewTournamentComponent },
  { path: ':uid', component: TournamentComponent, children: TOURNAMENT_DETAILS_ROUTES},
  { path: '**', pathMatch: 'full', redirectTo: '/' }
];
