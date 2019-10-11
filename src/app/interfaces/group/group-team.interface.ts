import { Team } from '../match/team.interface';

export interface GroupTeam {
    id?: number,
    groupId: number,
    tournamentId: number,
    team: Team,
    gamesPlayed?: number,
    gamesWon?: number,
    gamesTied?: number,
    gamesLost?: number,
    points?: number
}
