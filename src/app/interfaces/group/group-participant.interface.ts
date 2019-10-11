import { User } from '../user/user.interface';

export interface GroupParticipant {
  id?: number,
  groupId: number,
  groupName?: string,
  tournamentId: number,
  user: User,
  gamesPlayed?: number,
  gamesWon?: number,
  gamesTied?: number,
  gamesLost?: number,
  points?: number
}
