import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  private url: string = `${environment.endpointURL}/participants`;

  constructor(private http: HttpClient) { }

  pendingGroupByTournamentId = (id: number) => this.http.get(`${this.url}/pendingGroupByTournament/${id}`);

}
