import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SharedModule } from '../../../../shared/shared.module';
import { SharedPipeModule } from '../../../../../pipes/shared-pipe.module';

import { AngularMaterialModule } from '../../../../../angular-material.module';

import { MatchesGroupsComponent } from './matches-groups.component';
import { MatchUpdateComponent } from './match-update/match-update.component';

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
    MatchUpdateComponent
  ],
  exports: [
    MatchesGroupsComponent
  ],
  entryComponents: [MatchUpdateComponent]
})
export class MatchesGroupsModule { }
