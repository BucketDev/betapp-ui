import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoPipe } from './photo.pipe';
import { UriStyleSanitizerPipe } from './uri-style-sanitizer.pipe';
import { ImgPrivacyPipe } from './img-privacy.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PhotoPipe,
    UriStyleSanitizerPipe,
    ImgPrivacyPipe
  ],
  exports: [
    PhotoPipe,
    UriStyleSanitizerPipe,
    ImgPrivacyPipe
  ]
})
export class SharedPipeModule { }
