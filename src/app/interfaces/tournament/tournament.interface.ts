import { TournamentPrivacy } from '../types/tournament-privacy.enum';
import { TournamentStage } from '../types/tournament-stage.enum';
import { User } from '../user/user.interface';

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
