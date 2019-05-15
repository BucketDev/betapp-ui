import { User } from './user.interface';
import { PoolSettings } from './pool-settings.interface';
import { TournamentSettings } from './tournament-settings.interface';

export interface TournamentDetails {
    id: number,
    uid: string,
    title: string,
    photoUrl: string,
    tournamentGroups: boolean,
    creationDate: Date,
    userCreationId: number,
    participants: User[],
    poolSettings?: PoolSettings,
    tournamentSettings?: TournamentSettings
}
