import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FireAuthService } from '../shared/fire-auth.service';
import { UserFollower } from '../../interfaces/user/user-follower.interface';
import { User } from '../../interfaces/user/user.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserFollowersService {

  private url: string = `${environment.endpointURL}/userFollowers`

  user: UserFollower;

  constructor(private http: HttpClient,
              private auth: FireAuthService) { }

  following = (user: User) =>
    this.user.following.filter((_user: User) => _user.id === user.id).length > 0;

  findCountByUid = (uid: string) => this.http.get(`${this.url}/count/uid/${uid}`);

  findByUid = (uid: string) => this.http.get(`${this.url}/uid/${uid}`);

  follow = (toUid: string) => this.http.post(`${this.url}/from/${this.auth.user.uid}/to/${toUid}`, {});

  unfollow = (toUid: string) => this.http.delete(`${this.url}/from/${this.auth.user.uid}/to/${toUid}`, {});
  
}
