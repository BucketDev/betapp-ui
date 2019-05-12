import { TournamentPrivacy } from './tournament-privacy.interface';

export interface Tournament {
  tournamentId?: number,
  uid?: string,
  title: string,
  photoUrl?: string,
  tournamentPrivacy: TournamentPrivacy,
  tournamentGroups: boolean,
  tournamentTeams: boolean,
  creationDate?: Date,
  userCreationId?: number
}
