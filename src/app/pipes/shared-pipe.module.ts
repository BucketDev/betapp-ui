import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoPipe } from './photo.pipe';
import { UriStyleSanitizerPipe } from './uri-style-sanitizer.pipe';
import { ImgPrivacyPipe } from './img-privacy.pipe';
import { ImgNotificationPipe } from './img-notification.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PhotoPipe,
    UriStyleSanitizerPipe,
    ImgPrivacyPipe,
    ImgNotificationPipe
  ],
  exports: [
    PhotoPipe,
    UriStyleSanitizerPipe,
    ImgPrivacyPipe,
    ImgNotificationPipe
  ]
})
export class SharedPipeModule { }
