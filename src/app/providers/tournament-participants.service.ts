import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tournament } from '../interfaces/tournament.interface';

@Injectable({
  providedIn: 'root'
})

export class TournamentParticipantsService {

  private url: string = 'http://localhost:8080/tournamentParticipants'

  constructor(private http: HttpClient) { }

  findByParticipantUid = (uid: string) => this.http.get(`${this.url}/participant/${uid}`);

}
