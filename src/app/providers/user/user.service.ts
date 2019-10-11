import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../interfaces/user/user.interface';

import { environment } from '../../../environments/environment';
import { FireAuthService } from '../shared/fire-auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string = `${environment.endpointURL}/users`

  constructor(private http: HttpClient) { }

  findByUid = (uid: string) => this.http.get(`${this.url}/uid/${uid}`);

  findByDisplayName = (name: string) => this.http.get(`${this.url}/displayName/${name}`);

  save = (user: User) => this.http.post(this.url, user);

  update = (user: User) => this.http.put(this.url, user);

}
