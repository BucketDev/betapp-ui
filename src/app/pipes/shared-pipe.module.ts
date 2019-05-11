import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoPipe } from './photo.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PhotoPipe
  ],
  exports: [
    PhotoPipe
  ]
})
export class SharedPipeModule { }
