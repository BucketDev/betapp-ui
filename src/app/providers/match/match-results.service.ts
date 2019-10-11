import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { MatchResult } from '../../interfaces/match/match-result.interface';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchResultsService {

  private url: string = `${environment.endpointURL}/matchResults`;
  private matchTeamSubject = new Subject<number>();
  matchTeamSelected$ = this.matchTeamSubject.asObservable();

  constructor(private http: HttpClient) { }

  update = (matchResult: MatchResult) => this.http.put(`${this.url}/`, matchResult);

  selectMatchTeamId = (matchTeamId: number) => this.matchTeamSubject.next(matchTeamId);

  getParticipantResults = (matchTeamId: number) => this.http.get(`${this.url}/matchTeam/${matchTeamId}`);
}
