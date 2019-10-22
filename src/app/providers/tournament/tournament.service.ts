import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tournament } from '../../interfaces/tournament/tournament.interface';
import { User } from '../../interfaces/user/user.interface';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class TournamentService {

  private url: string = `${environment.endpointURL}/tournaments`

  constructor(private http: HttpClient) { }

  save = (tournament: Tournament) => this.http.post(this.url, tournament);

  update = (tournament: Tournament) => this.http.put(this.url, tournament);

  delete = (uid: string) => this.http.delete(`${this.url}/${uid}`);

  updatePhoto = (tournament: {id: number, photoUrl: string}) => this.http.put(`${this.url}/${tournament.id}/photo`, tournament);

  addParticipant = (id: number, user: User) => this.http.post(`${this.url}/${id}/participant`, user);

  deleteParticipants = (id: number, users: User[]) => {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      body: users
    }
    return this.http.delete(`${this.url}/${id}/participants`, httpOptions);
  };

  stage = (tournament: {id: number, uid: string, tournamentStage: string}) => this.http.put(`${this.url}/stage`, tournament);

}
