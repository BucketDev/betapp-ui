import { GroupParticipant } from './group-participant.interface';

export interface Group {
    id: number;
    name: string;
    tournamentId: number;
    groupParticipants: GroupParticipant[];
}
