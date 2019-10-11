import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { GroupTeam } from '../../interfaces/group/group-team.interface';

@Injectable({
  providedIn: 'root'
})
export class GroupTeamService {

  private url: string = `${environment.endpointURL}/groupTeams`;

  constructor(private http: HttpClient) { }

  findByTournamentId = (tournamentId: number) =>
    this.http.get(`${this.url}/tournament/${tournamentId}`);

    addTeam = (groupTeam: GroupTeam) =>
    this.http.post(`${this.url}/`, groupTeam);
}
