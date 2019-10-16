import { Notification } from './notification.interface';
import { User } from '../user/user.interface';

export interface NoificationUser {
  user: User,
  notification: Notification
}