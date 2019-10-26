import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FireAuthService } from '../shared/fire-auth.service';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificationLikesService {

  private url: string = `${environment.endpointURL}/notificationLikes`

  constructor(private http: HttpClient, private auth: FireAuthService) { }

  create = (notificationId: number) => this.http.post(`${this.url}/notification/${notificationId}/user/${this.auth.user.id}`, {});

  delete = (notificationId: number) => this.http.delete(`${this.url}/notification/${notificationId}/user/${this.auth.user.id}`);
}
