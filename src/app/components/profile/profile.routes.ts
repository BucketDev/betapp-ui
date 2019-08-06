import { Routes } from '@angular/router';

import { ProfileComponent } from './profile.component';

import { PROFILE_SETTINGS_ROUTES } from './profile-settings/profile-settings.routes';

export const PROFILE_ROUTES: Routes = [
  { path: ':uid', component: ProfileComponent, children: PROFILE_SETTINGS_ROUTES },
  { path: '**', pathMatch: 'full', redirectTo: ':uid' }
];
