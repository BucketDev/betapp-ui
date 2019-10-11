export interface MatchResult {
    id?: number;
    userId: number,
    tournamentId: number,
    matchTeamsId: number,
    scoreAway: number,
    scoreHome: number,
    points?: number,
    creationTime?: Date,
  }
