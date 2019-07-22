import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TournamentSettings } from '../interfaces/tournament-settings.interface';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TournamentSettingsService {

  private url: string = `${environment.endpointURL}/tournamentSettings`;

  constructor(private http: HttpClient) { }

  findByTournamentUid = (uid: string) => this.http.get(`${this.url}/tournament/${uid}`);

  upsert = (tournamentSettings: TournamentSettings) => this.http.post(this.url, tournamentSettings);

}
