import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TournamentDetails } from '../interfaces/tournament-details.interface';

import { environment } from '../../environments/environment';
import { FireAuthService } from './fire-auth.service';

@Injectable({
  providedIn: 'root'
})
export class TournamentDetailsService {

  private url: string = `${environment.endpointURL}/tournamentDetails`

  public tournament: TournamentDetails;

  constructor(public auth: FireAuthService,
              private http: HttpClient) { }

  findByUid = (uid: string) => this.http.get(`${this.url}/${uid}`);

  isCreator = () => this.auth.user.id === this.tournament.userCreationId;

}
