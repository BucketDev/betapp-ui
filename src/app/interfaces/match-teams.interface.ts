import { GroupTeam } from './group-team.interface';

export interface MatchTeams {
    id: number,
    tournamentId: number,
    groupTeamAway?: GroupTeam,
    scoreAway: number,
    groupTeamHome?: GroupTeam,
    scoreHome: number,
    scheduledTime?: Date,
    registeredTime?: Date
}
