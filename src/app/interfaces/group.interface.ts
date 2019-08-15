import { GroupParticipant } from './group-participant.interface';
import { PlayoffStage } from './playoff-stage.enum';

export interface Group {
    id: number,
    name: string,
    tournamentId: number,
    playoffStage?: PlayoffStage,
    groupParticipants: GroupParticipant[]
}
