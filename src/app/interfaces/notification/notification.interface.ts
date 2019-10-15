import { NotificationType } from './notification-type.interface';
import { User } from '../user/user.interface';

export interface Notification {
  id: number,
  notificationType: NotificationType,
  userOrigin: User,
  destinyUid: string,
  destinyName: string,
  destinyPhotoUrl: string,
  creationDate: Date
}