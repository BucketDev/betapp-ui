import { Routes } from '@angular/router';

import { ProfileGeneralComponent } from './profile-general/profile-general.component';
import { ProfileWalletComponent } from './profile-wallet/profile-wallet.component';
import { ProfilePrivacyComponent } from './profile-privacy/profile-privacy.component';
import { ProfileNotificationsComponent } from './profile-notifications/profile-notifications.component';
import { ProfilePeopleComponent } from './profile-people/profile-people.component';
import { PROFILE_PEOPLE_ROUTES } from './profile-people/profile-people.routes';

export const PROFILE_SETTINGS_ROUTES: Routes = [
  { path: 'general', component: ProfileGeneralComponent },
  { path: 'people', component: ProfilePeopleComponent, children: PROFILE_PEOPLE_ROUTES },
  { path: 'wallet', component: ProfileWalletComponent },
  { path: 'privacy', component: ProfilePrivacyComponent },
  { path: 'notifications', component: ProfileNotificationsComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'general' }
];
