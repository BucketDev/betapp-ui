import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TournamentDetailsService {

  private url: string = 'http://localhost:8080/tournamentDetails'

  constructor(private http: HttpClient) { }

  findByUid = (uid: string) => this.http.get(`${this.url}/${uid}`);

}
