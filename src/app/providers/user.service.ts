import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string = 'http://localhost:8080/users'

  constructor(private http: HttpClient) { }

  findByUid = (uid: string) => this.http.get(`${this.url}/${uid}`);

  save = (user: User) => this.http.post(this.url, user);

  update = (user: User) => this.http.put(this.url, user);

}
