import { GroupParticipants } from './group-participants.interface';

export interface Group {
    id: number;
    name: string;
    tournamentId: number;
    groupParticipants: GroupParticipants[];
}
