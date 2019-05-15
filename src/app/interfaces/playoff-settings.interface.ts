import { PlayoffStage } from './playoff-stage.enum';

export interface PlayoffSettings {
    id: number,
    tournamentSettingsId: number,
    playoffStage: PlayoffStage,
    roundTrip: boolean,
}
