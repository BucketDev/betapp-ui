import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { LoadingComponent } from './loading/loading.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UploadComponent } from './upload/upload.component';
import { SaveInputComponent } from './save-input/save-input.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    FormsModule
  ],
  declarations: [
    LoadingComponent,
    NavbarComponent,
    UploadComponent,
    SaveInputComponent
  ],
  exports: [
    LoadingComponent,
    NavbarComponent,
    UploadComponent,
    SaveInputComponent
  ]
})
export class SharedModule { }
