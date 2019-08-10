import { GroupParticipant } from './group-participant.interface';

export interface MatchParticipants {
    id: number,
    tournamentId: number,
    groupParticipantAway: GroupParticipant,
    scoreAway: number,
    groupParticipantHome: GroupParticipant,
    scoreHome: number,
    scheduledTime?: Date,
    registeredTime?: Date
  }
