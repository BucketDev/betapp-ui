import { PlayoffStage } from './playoff-stage.enum';

export interface TournamentSettings {
    id?: number,
    tournamentId: number,
    groupRoundTrip: boolean,
    groupNumber: number,
    first: number,
    playoffStage?: PlayoffStage,
    eightFinalsRoundTrip?: boolean,
    quarterFinalsRoundTrip?: boolean,
    semiFinalsRoundTrip?: boolean,
    finalRoundTrip?: boolean
}
