import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from './providers/auth-guard.service';

import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { LOGIN_ROUTES } from './components/login/login.routes';
import { TOURNAMENT_ROUTES } from './components/tournament/tournament.routes';
import { PROFILE_ROUTES } from './components/profile/profile.routes';

const routes: Routes = [
  { path: 'login', component: LoginComponent, children: LOGIN_ROUTES },
  { path: '', canActivate:[AuthGuardService], children: [
    { path: 'dashboard',  component: DashboardComponent },
    { path: 'tournament', children: TOURNAMENT_ROUTES },
    { path: 'profile', children: PROFILE_ROUTES },
    { path: '**', pathMatch: 'full', redirectTo: 'dashboard' }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
