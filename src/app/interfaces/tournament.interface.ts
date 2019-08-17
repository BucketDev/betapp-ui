import { TournamentPrivacy } from './tournament-privacy.enum';
import { TournamentStage } from './tournament-stage.enum';
import { User } from './user.interface';

export interface Tournament {
  id?: number,
  uid?: string,
  title: string,
  photoUrl?: string,
  tournamentPrivacy: TournamentPrivacy,
  tournamentGroups: boolean,
  tournamentTeams: boolean,
  creationDate?: Date,
  userCreationId?: number,
  tournamentStage?: TournamentStage,
  userWinner?: User
}
