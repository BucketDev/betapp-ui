import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tournament } from '../interfaces/tournament.interface';
import { User } from '../interfaces/user.interface';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class TournamentService {

  private url: string = `${environment.endpointURL}/tournaments`

  constructor(private http: HttpClient) { }

  save = (tournament: Tournament) => this.http.post(this.url, tournament);

  update = (tournament: Tournament) => this.http.put(this.url, tournament);

  addParticipant = (id: number, user: User) => this.http.post(`${this.url}/${id}/participants`, user);

}
