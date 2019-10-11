import { GroupTeam } from '../group/group-team.interface';
import { PlayoffStage } from '../types/playoff-stage.enum';
import { MatchResult } from './match-result.interface';

export interface MatchTeams {
    id: number,
    tournamentId: number,
    groupName: string,
    groupTeamAway?: GroupTeam,
    scoreAway: number,
    groupTeamHome?: GroupTeam,
    scoreHome: number,
    scheduledTime?: Date,
    registeredTime?: Date
    playoffStage?: PlayoffStage,
    round: number,
    matchResult?: MatchResult
}
