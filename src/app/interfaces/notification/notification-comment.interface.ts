import { User } from '../user/user.interface';

export interface NotificationComment {

  id?: number,
  notificationId: number,
  user: User,
  comment: string,
  creationDate?: Date

}