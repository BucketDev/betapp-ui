import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FireAuthService } from '../shared/fire-auth.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserFollowersService {

  private url: string = `${environment.endpointURL}/userFollowers`

  constructor(private http: HttpClient,
              private auth: FireAuthService) { }

  findCountByUid = (uid: string) => this.http.get(`${this.url}/count/uid/${uid}`);

  findByUid = (uid: string) => this.http.get(`${this.url}/uid/${uid}`);

  follow = (toUid: string) => this.http.post(`${this.url}/from/${this.auth.user.uid}/to/${toUid}`, {});

  unfollow = (toUid: string) => this.http.delete(`${this.url}/from/${this.auth.user.uid}/to/${toUid}`, {});
  
}
