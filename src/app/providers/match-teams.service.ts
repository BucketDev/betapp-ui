import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { MatchParticipants } from '../interfaces/match-participants.interface';
import { HttpClient } from '@angular/common/http';
import { MatchTeams } from '../interfaces/match-teams.interface';

@Injectable({
  providedIn: 'root'
})
export class MatchTeamsService {

  private url: string = `${environment.endpointURL}/matchTeams`;

  constructor(private http: HttpClient) { }

  findAllByTournamentId = (id: number) => this.http.get(`${this.url}/tournament/${id}`);

  findAllPlayoffsByTournamentId = (id: number) => this.http.get(`${this.url}/tournament/${id}/playoffs`);

  update = (matchTeams: MatchTeams) => this.http.put(`${this.url}/`, matchTeams);

}
