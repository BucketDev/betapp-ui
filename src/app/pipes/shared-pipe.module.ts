import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoPipe } from './photo.pipe';
import { UriStyleSanitizerPipe } from './uri-style-sanitizer.pipe';
import { ImgPrivacyPipe } from './img-privacy.pipe';
import { ImgNotificationPipe } from './img-notification.pipe';
import { TextNotificationPipe } from './text-notification.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PhotoPipe,
    UriStyleSanitizerPipe,
    ImgPrivacyPipe,
    ImgNotificationPipe,
    TextNotificationPipe
  ],
  exports: [
    PhotoPipe,
    UriStyleSanitizerPipe,
    ImgPrivacyPipe,
    ImgNotificationPipe,
    TextNotificationPipe
  ]
})
export class SharedPipeModule { }
