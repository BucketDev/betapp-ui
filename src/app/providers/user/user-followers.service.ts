import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FireAuthService } from '../shared/fire-auth.service';
import { UserFollower } from '../../interfaces/user/user-follower.interface';
import { User } from '../../interfaces/user/user.interface';
import { SubUserFollower } from '../..//interfaces/user/sub-user-follower.interface';
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
    this.user.following.filter((_user: SubUserFollower) => _user.id === user.id).length > 0;

  sameUser = (user: User) => this.auth.user.uid === user.uid;

  findCountByUid = (uid: string) => this.http.get(`${this.url}/count/uid/${uid}`);

  findByUid = (uid: string) => this.http.get(`${this.url}/uid/${uid}`);

  findByDisplayName = (displayName: string) => this.http.get(`${this.url}/uid/${this.auth.user.uid}/displayName/${displayName}`);

  findFollowingByUid = (uid: string, followingUid: string) => this.http.get(`${this.url}?uid=${uid}&followingUid=${followingUid}`);

  follow = (toUid: string) => this.http.post(`${this.url}/from/${this.auth.user.uid}/to/${toUid}`, {});

  unfollow = (toUid: string) => this.http.delete(`${this.url}/from/${this.auth.user.uid}/to/${toUid}`, {});
  
}
