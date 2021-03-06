import { User } from '../user/user.interface';
import { MatchResult } from './match-result.interface';

export interface ParticipantResults {
    id: number,
    tournamentId: number,
    user: User,
    matchResult: MatchResult;
}