import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  private url: string = `${environment.endpointURL}/groups`;

  constructor(private http: HttpClient) { }

  findByTournamentUid = (uid: string) => this.http.get(`${this.url}/tournament/${uid}`);

}
