import { GroupParticipant } from './group-participant.interface';
import { PlayoffStage } from './playoff-stage.enum';
import { GroupTeam } from './group-team.interface';

export interface Group {
    id: number,
    name: string,
    tournamentId: number,
    playoffStage?: PlayoffStage,
    groupParticipants?: GroupParticipant[],
    groupTeams?: GroupTeam[]
}
