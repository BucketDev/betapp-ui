import { User } from './user.interface';

export interface MatchResult {
    id?: number;
    participant: User,
    tournamentId: number,
    matchTeamsId: number,
    scoreAway: number,
    scoreHome: number,
    points?: number,
    creationTime?: Date,
  }
