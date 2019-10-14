import { Routes } from '@angular/router';

import { ProfileFollowersComponent } from './profile-followers/profile-followers.component';
import { ProfileFollowingComponent } from './profile-following/profile-following.component';

export const PROFILE_PEOPLE_ROUTES: Routes = [
  { path: 'following', component: ProfileFollowingComponent },
  { path: 'followers', component: ProfileFollowersComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'following' }
];
