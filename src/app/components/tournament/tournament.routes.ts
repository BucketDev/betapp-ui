import { Routes } from '@angular/router';

import { NewTournamentComponent } from './new/new-tournament.component';
import { TournamentComponent } from './tournament.component';

export const TOURNAMENT_ROUTES: Routes = [
  { path: '', component: NewTournamentComponent },
  { path: ':id', component: TournamentComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/' }
];
