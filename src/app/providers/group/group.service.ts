import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  private url: string = `${environment.endpointURL}/groups`;

  constructor(private http: HttpClient) { }

  findAllByTournamentUid = (uid: string) => this.http.get(`${this.url}/tournament/${uid}`);

  findAllPlayoffsByTournamentUid = (uid: string) => this.http.get(`${this.url}/tournament/${uid}/playoffs`);

}
