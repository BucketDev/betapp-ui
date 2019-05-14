import { User } from './user.interface';
import { PoolSettings } from './pool-settings.interface';

export interface TournamentDetails {
    id: number,
    uid: string,
    title: string,
    photoUrl: string,
    creationDate: Date,
    userCreationId: number,
    participants: User[],
    poolSettings?: PoolSettings
}
