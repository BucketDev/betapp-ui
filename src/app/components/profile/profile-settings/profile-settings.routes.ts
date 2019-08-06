import { Routes } from '@angular/router';

import { ProfileGeneralComponent } from './profile-general/profile-general.component';
import { ProfileWalletComponent } from './profile-wallet/profile-wallet.component';
import { ProfilePrivacyComponent } from './profile-privacy/profile-privacy.component';
import { ProfileNotificationsComponent } from './profile-notifications/profile-notifications.component';

export const PROFILE_SETTINGS_ROUTES: Routes = [
  { path: 'general', component: ProfileGeneralComponent },
  { path: 'wallet', component: ProfileWalletComponent },
  { path: 'privacy', component: ProfilePrivacyComponent },
  { path: 'notifications', component: ProfileNotificationsComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'general' }
];
