import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { GroupParticipant } from '../../interfaces/group/group-participant.interface';
import { User } from '../../interfaces/user/user.interface';

@Injectable({
  providedIn: 'root'
})
export class GroupParticipantService {

  private url: string = `${environment.endpointURL}/groupParticipants`;

  constructor(private http: HttpClient) { }

  findByTournamentId = (tournamentId: number) =>
    this.http.get(`${this.url}/tournament/${tournamentId}`);

  saveByGroupId = (groupId: number, users: User[]) =>
    this.http.post(`${this.url}/group/${groupId}`, users);

  insert = (groupParticipant: GroupParticipant) =>
    this.http.post(`${this.url}/`, groupParticipant);

}
