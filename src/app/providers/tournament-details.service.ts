import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TournamentDetails } from '../interfaces/tournament-details.interface';

@Injectable({
  providedIn: 'root'
})
export class TournamentDetailsService {

  private url: string = 'http://localhost:8080/tournamentDetails'

  public tournament: TournamentDetails;

  constructor(private http: HttpClient) { }

  findByUid = (uid: string) => this.http.get(`${this.url}/${uid}`);

}
