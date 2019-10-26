import { Notification } from './notification.interface';
import { User } from '../user/user.interface';

export interface NoitficationUser {
  user: User,
  notification: Notification,
  likes: number,
  liked: boolean
}