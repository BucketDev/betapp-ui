import { GroupParticipant } from './group-participant.interface';
import { PlayoffStage } from './playoff-stage.enum';

export interface MatchParticipants {
    id: number,
    tournamentId: number,
    groupName: string,
    groupParticipantAway: GroupParticipant,
    scoreAway: number,
    groupParticipantHome: GroupParticipant,
    scoreHome: number,
    scheduledTime?: Date,
    registeredTime?: Date,
    playoffStage?: PlayoffStage
  }
