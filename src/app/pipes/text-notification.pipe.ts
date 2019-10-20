import { Pipe, PipeTransform } from '@angular/core';
import { NotificationType } from '../interfaces/notification/notification-type.interface';

@Pipe({
  name: 'textNotification'
})
export class TextNotificationPipe implements PipeTransform {

  transform(value: NotificationType): any {
    let text = "";
    switch(NotificationType[value]) {
      case NotificationType.NEW_TOURNAMENT:
        text = 'has created a new tournament!'
        break;
    }
    return text;
  }

}
