import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TournamentSettings } from '../interfaces/tournament-settings.interface';

@Injectable({
  providedIn: 'root'
})
export class TournamentSettingsService {

  private url: string = 'http://localhost:8080/tournamentSettings'

  constructor(private http: HttpClient) { }

  upsert = (tournamentSettings: TournamentSettings) => this.http.post(this.url, tournamentSettings);

}
