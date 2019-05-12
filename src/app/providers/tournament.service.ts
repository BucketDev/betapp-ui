import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tournament } from '../interfaces/tournament.interface';

@Injectable({
  providedIn: 'root'
})

export class TournamentService {

  private url: string = 'http://localhost:8080/tournaments'

  constructor(private http: HttpClient) { }

  save = (tournament: Tournament) => this.http.post(this.url, tournament);

  update = (tournament: Tournament) => this.http.put(this.url, tournament);

}
