import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { FireAuthService } from './fire-auth.service';
import { MatchTeams } from '../interfaces/match-teams.interface';

@Injectable({
  providedIn: 'root'
})
export class MatchTeamsService {

  private url: string = `${environment.endpointURL}/matchTeams`;

  constructor(private http: HttpClient,
              private auth: FireAuthService) { }

  findAllByTournamentId = (id: number) => this.http.get(`${this.url}/tournament/${id}?userUid=${this.auth.user.uid}`);

  findAllPlayoffsByTournamentId = (id: number) => this.http.get(`${this.url}/tournament/${id}/playoffs`);

  update = (matchTeams: MatchTeams) => this.http.put(`${this.url}/`, matchTeams);

}
