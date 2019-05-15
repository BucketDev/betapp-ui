import { TournamentPrivacy } from './tournament-privacy.enum';

export interface Tournament {
  id?: number,
  uid?: string,
  title: string,
  photoUrl?: string,
  tournamentPrivacy: TournamentPrivacy,
  tournamentGroups: boolean,
  tournamentTeams: boolean,
  creationDate?: Date,
  userCreationId?: number
}
