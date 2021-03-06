import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { MatchParticipants } from '../../interfaces/match/match-participants.interface';

@Injectable({
  providedIn: 'root'
})
export class MatchParticipantsService {

  private url: string = `${environment.endpointURL}/matchParticipants`;

  constructor(private http: HttpClient) { }

  findAllByTournamentId = (id: number) => this.http.get(`${this.url}/tournament/${id}`);

  findAllPlayoffsByTournamentId = (id: number) => this.http.get(`${this.url}/tournament/${id}/playoffs`);

  update = (matchParticipants: MatchParticipants) => this.http.put(`${this.url}/`, matchParticipants);

}
