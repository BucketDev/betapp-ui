import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { GroupParticipant } from '../../interfaces/group/group-participant.interface';

@Injectable({
  providedIn: 'root'
})
export class GroupParticipantService {

  private url: string = `${environment.endpointURL}/groupParticipants`;

  constructor(private http: HttpClient) { }

  findByTournamentId = (tournamentId: number) =>
    this.http.get(`${this.url}/tournament/${tournamentId}`);

  saveParticipant = (groupParticipant: GroupParticipant) =>
    this.http.post(`${this.url}/`, groupParticipant);

}
