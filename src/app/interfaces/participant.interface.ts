import { User } from './user.interface';

export interface Participant {
  id: number,
  tournamentId: number,
  user: User
}
