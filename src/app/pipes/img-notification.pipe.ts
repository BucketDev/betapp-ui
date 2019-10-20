import { Pipe, PipeTransform } from '@angular/core';

import { NotificationType } from '../interfaces/notification/notification-type.interface';

@Pipe({
  name: 'imgNotification'
})
export class ImgNotificationPipe implements PipeTransform {

  transform(value: NotificationType, size?: number): any {
    size = size || 24;
    let uri = "";
    switch(NotificationType[value]) {
      case NotificationType.NEW_TOURNAMENT:
        uri = `https://png.icons8.com/cotton/trophy--v2/${size}`
        break;
    }
    return uri;
  }

}
