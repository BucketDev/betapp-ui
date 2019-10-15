import { Notification } from '../notification/notification.interface';

export interface UserNotification {
  id: number,
  uid: string,
  notifications: Notification[]
}