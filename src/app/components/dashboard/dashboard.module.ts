import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { SharedPipeModule } from '../../pipes/shared-pipe.module';

import { DashboardComponent } from './dashboard.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SharedPipeModule
  ],
  declarations: [
    DashboardComponent,
    ProfileComponent
  ],
})
export class DashboardModule { }
