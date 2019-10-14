import { User } from '../user/user.interface';
import { PoolSettings } from './pool-settings.interface';
import { TournamentSettings } from './tournament-settings.interface';
import { TournamentStage } from '../types/tournament-stage.enum';
import { TournamentPrivacy } from '../types/tournament-privacy.enum';

export interface TournamentDetails {
    id: number,
    uid: string,
    title: string,
    photoUrl: string,
    tournamentGroups: boolean,
    tournamentTeams: boolean,
    creationDate: Date,
    userCreationId: number,
    participants: User[],
    poolSettings?: PoolSettings,
    tournamentSettings?: TournamentSettings,
    userWinner?: User,
    tournamentStage: TournamentStage,
    tournamentPrivacy: TournamentPrivacy
}
