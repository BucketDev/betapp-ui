import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SharedModule } from '../../../../shared/shared.module';
import { AngularMaterialModule } from '../../../../../angular-material.module';
import { SharedPipeModule } from '../../../../../pipes/shared-pipe.module';

import { MatchesGroupsComponent } from './matches-groups.component';
import { MatchUpdateComponent } from './match-update/match-update.component';
import { MatchDateComponent } from './match-date/match-date.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    SharedModule,
    SharedPipeModule,
    AngularMaterialModule
  ],
  declarations: [
    MatchesGroupsComponent,
    MatchUpdateComponent,
    MatchDateComponent
  ],
  exports: [
    MatchesGroupsComponent
  ],
  entryComponents: [
    MatchUpdateComponent,
    MatchDateComponent
  ]
})
export class MatchesGroupsModule { }
