import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SharedModule } from '../../shared/shared.module';
import { SharedPipeModule } from '../../../pipes/shared-pipe.module';
import { AngularMaterialModule } from '../../../angular-material.module';

import { TimeLineComponent } from './time-line.component';
import { CommentsComponent } from './comments/comments.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    SharedPipeModule,
    AngularMaterialModule,
    FontAwesomeModule,
  ],
  declarations: [
    TimeLineComponent,
    CommentsComponent
  ],
  exports: [
    TimeLineComponent
  ]
})
export class TimeLineModule { }
