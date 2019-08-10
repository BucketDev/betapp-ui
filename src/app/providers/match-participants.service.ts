import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MatchParticipantsService {

  private url: string = `${environment.endpointURL}/matchParticipants`;

  constructor(private http: HttpClient) { }

  findAllByTournamentId = (id: number) => this.http.get(`${this.url}/tournament/${id}`);

}
