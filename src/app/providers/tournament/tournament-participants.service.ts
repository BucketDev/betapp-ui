import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class TournamentParticipantsService {

  private url: string = `${environment.endpointURL}/tournamentParticipants`

  constructor(private http: HttpClient) { }

  findByParticipantUid = (uid: string, page: number = 0) => this.http.get(`${this.url}/participant/${uid}?page=${page}`);

}
