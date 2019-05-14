import { User } from './user.interface';

export interface TournamentParticipants {
    id: number,
    uid: string,
    title: string,
    photoUrl?: string,
    creationDate: Date,
    userCreationId: number,
    participants: User[]
}
