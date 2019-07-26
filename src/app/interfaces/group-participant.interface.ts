import { Group } from './group.interface';
import { User } from './user.interface';

export interface GroupParticipant {
  id?: number,
  group: Group,
  user: User
}
