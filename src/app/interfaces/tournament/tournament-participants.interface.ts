import { TournamentPrivacy } from '../types/tournament-privacy.enum';

export interface TournamentParticipants {
    id: number,
    uid: string,
    title: string,
    photoUrl?: string,
    creationDate: Date,
    userCreationId: number,
    userWinner: boolean,
    participantsNumber: number
    tournamentPrivacy: TournamentPrivacy
}
