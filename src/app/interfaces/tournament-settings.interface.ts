import { PlayoffSettings } from './playoff-settings.interface';
import { PlayoffStage } from './playoff-stage.enum';

export interface TournamentSettings {
    id?: number,
    tournamentId: number,
    groupRoundTrip: boolean,
    groupNumber: number,
    first: number,
    playoffStage?: PlayoffStage,
    playoffSettings?: PlayoffSettings[],
}
