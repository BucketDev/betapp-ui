import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TournamentSettings } from '../interfaces/tournament-settings.interface';

@Injectable({
  providedIn: 'root'
})
export class TournamentSettingsService {

  private url: string = 'http://localhost:8080/tournamentSettings'

  constructor(private http: HttpClient) { }

  findByTournamentUid = (uid: string) => this.http.get(`${this.url}/tournamentUid/${uid}`);

  upsert = (tournamentSettings: TournamentSettings) => this.http.post(this.url, tournamentSettings);

}
