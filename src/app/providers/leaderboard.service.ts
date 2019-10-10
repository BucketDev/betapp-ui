import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {

  private url: string = `${environment.endpointURL}/leaderboards`;

  constructor(private http: HttpClient) { }

  findAllByTournamentId = (tournamentId: number) => this.http.get(`${this.url}/tournament/${tournamentId}`);

}