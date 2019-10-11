import { User } from '../user/user.interface';

export interface Participant {
  id: number,
  tournamentId: number,
  user: User
}
