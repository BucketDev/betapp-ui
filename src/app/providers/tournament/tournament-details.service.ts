import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FireAuthService } from '../shared/fire-auth.service';
import { TournamentStage } from '../../interfaces/types/tournament-stage.enum';
import { TournamentDetails } from '../../interfaces/tournament/tournament-details.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TournamentDetailsService {

  private tournamentStage = TournamentStage;
  private url: string = `${environment.endpointURL}/tournamentDetails`

  public tournament: TournamentDetails;

  constructor(public auth: FireAuthService,
              private http: HttpClient) { }

  findByUid = (uid: string) => this.http.get(`${this.url}/${uid}`);

  isCreator = () => this.auth.user.id === this.tournament.userCreationId;

  isNewTournament = () => this.tournament.tournamentStage === this.tournamentStage['NEW_TOURNAMENT'];

}
